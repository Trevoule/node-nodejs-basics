import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { currentDirectoryPath } from './utils.js';

const decompress = async () => {
    const fileToCompress = currentDirectoryPath('files', 'fileToCompress.txt');
    const archiveGz = currentDirectoryPath('files', `archive.gz`);

    const source = createReadStream(archiveGz);
    const gunzip = createGunzip();
    const destination = createWriteStream(fileToCompress);

    try {
        await pipeline(source, gunzip, destination);
        console.log('Decompression completed successfully.');
    } catch (err) {
        console.error('An error occurred during decompression:', err);
        process.exitCode = 1;
    }
};

await decompress();