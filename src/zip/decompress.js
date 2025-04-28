import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream/promises';

import { currentDirectoryPath } from './utils.js';

const decompress = async () => {
    const fileToCompress = currentDirectoryPath('files', 'fileToCompress.txt');
    const archiveGz = currentDirectoryPath('files', `archive.gz`);

    const source = fs.createReadStream(archiveGz);
    const destination = fs.createWriteStream(fileToCompress);
    const gunzip = zlib.createGunzip();

    try {
        await stream.pipeline(source, gunzip, destination);
        console.log('Decompression completed successfully.');
    } catch (err) {
        console.error('An error occurred during decompression:', err);
        process.exitCode = 1;
    }
};

await decompress();