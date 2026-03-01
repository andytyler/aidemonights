import { error } from '@sveltejs/kit';
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';

const MIME_TYPES: Record<string, string> = {
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.webp': 'image/webp',
	'.svg': 'image/svg+xml',
	'.bmp': 'image/bmp',
	'.avif': 'image/avif'
};

const ALLOWED_DIR = resolve(process.cwd(), 'src/lib/data/notion export');

export const GET = async ({ url }) => {
	const encodedFile = url.searchParams.get('file');
	if (!encodedFile) {
		throw error(400, 'Missing file parameter');
	}

	let decodedFile: string;
	try {
		decodedFile = decodeURIComponent(encodedFile);
	} catch {
		throw error(400, 'Invalid file parameter');
	}
	const requestedPath = resolve(join(ALLOWED_DIR, decodedFile));

	if (!requestedPath.startsWith(`${ALLOWED_DIR}${sep}`) && requestedPath !== ALLOWED_DIR) {
		throw error(400, 'Invalid file parameter');
	}

	if (!existsSync(requestedPath) || !requestedPath.endsWith('.png') && !requestedPath.endsWith('.jpg') && !requestedPath.endsWith('.jpeg') && !requestedPath.endsWith('.webp') && !requestedPath.endsWith('.gif') && !requestedPath.endsWith('.bmp') && !requestedPath.endsWith('.svg') && !requestedPath.endsWith('.avif')) {
		throw error(404, 'Image not found');
	}

	const file = await fs.readFile(requestedPath);
	const mimeType = MIME_TYPES[extname(requestedPath).toLowerCase()] || 'application/octet-stream';

	return new Response(file, {
		headers: {
			'Content-Type': mimeType,
			'Cache-Control': 'public, max-age=300',
			'Content-Length': file.length.toString()
		}
	});
};
