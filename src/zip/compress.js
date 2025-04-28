import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { currentDirectoryPath } from './utils.js';
import { pipeline } from 'stream';

const compress = async () => {
    const gzip = createGzip();
    const fileToCompress = currentDirectoryPath('files', 'fileToCompress.txt');
    const archiveGz = currentDirectoryPath('files', `archive.gz`);

    const source = createReadStream(fileToCompress);
    const destination = createWriteStream(archiveGz);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();