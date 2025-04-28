import fs from 'fs';

import { currentDirectoryPath } from './utils.js';

const read = async () => {
    const fileToRead = currentDirectoryPath('files', 'fileToRead.txt');

    const readStream = fs.createReadStream(fileToRead, { encoding: 'utf-8' });

    readStream.pipe(process.stdout);

    readStream.on('error', (err) => {
        console.error('Error reading the file:', err.message);
    });

    readStream.on('end', () => {
        console.log('Finished');
    });
};

await read();