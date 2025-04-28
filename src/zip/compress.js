import zlib from 'zlib';
import fs from 'fs';
import stream from 'stream';

import { currentDirectoryPath } from './utils.js';

const compress = async () => {
    const gzip = zlib.createGzip();
    const fileToCompress = currentDirectoryPath('files', 'fileToCompress.txt');
    const archiveGz = currentDirectoryPath('files', `archive.gz`);

    const source = fs.createReadStream(fileToCompress);
    const destination = fs.createWriteStream(archiveGz);

    stream.pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();