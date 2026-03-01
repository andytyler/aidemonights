import { error } from '@sveltejs/kit';

const META_LIMIT = 5_000_000;

const strip = (html: string, regex: RegExp): string => {
	const match = html.match(regex);
	return match ? match[1].trim() : '';
};

const normalizeImageUrl = (imageUrl: string, sourceUrl: string): string => {
	try {
		return new URL(imageUrl, sourceUrl).toString();
	} catch {
		return '';
	}
};

export const GET = async ({ url: requestUrl }) => {
	const rawUrl = requestUrl.searchParams.get('url');
	if (!rawUrl) {
		throw error(400, 'Missing url parameter');
	}

	let parsedUrl: URL;
	try {
		parsedUrl = new URL(rawUrl);
	} catch {
		throw error(400, 'Invalid URL');
	}

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 5000);

	let response: Response;
	try {
		response = await fetch(parsedUrl.toString(), {
			method: 'GET',
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; Mozilla/5.0)'
			},
			signal: controller.signal
		});
	} catch {
		clearTimeout(timeout);
		throw error(502, 'Failed to fetch preview');
	}
	clearTimeout(timeout);

	if (!response.ok) {
		throw error(502, `Could not fetch preview (${response.status})`);
	}

	const contentType = response.headers.get('content-type') || '';
	if (!contentType.includes('text/html')) {
		return new Response(
			JSON.stringify({
				url: parsedUrl.toString(),
				title: '',
				description: '',
				domain: parsedUrl.hostname
			}),
			{
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}

	const text = await response.text();
	const previewText = text.length > META_LIMIT ? text.slice(0, META_LIMIT) : text;

	const title =
		strip(previewText, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<meta[^>]+name=["']twitter:title["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<title>(.*?)<\/title>/i);

	const description =
		strip(previewText, /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<meta[^>]+property=["']twitter:description["'][^>]+content=["']([^"']+)["'][^>]*>/i);

	const rawImage = 
		strip(previewText, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<meta[^>]+name=["']twitter:image:src["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<meta[^>]+name=["']thumbnail["'][^>]+content=["']([^"']+)["'][^>]*>/i) ||
		strip(previewText, /<img[^>]+class=["'][^"']*avatar[^"']*["'][^>]+src=["']([^"']+)["'][^>]*>/i);

	const image = normalizeImageUrl(rawImage, parsedUrl.toString());

	const preview = {
		url: parsedUrl.toString(),
		title,
		description,
		image,
		domain: parsedUrl.hostname
	};

	return new Response(JSON.stringify(preview), {
		headers: { 'Content-Type': 'application/json' }
	});
};
