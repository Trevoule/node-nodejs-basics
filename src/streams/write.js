import fs from 'fs';

import { currentDirectoryPath } from './utils.js';

const write = async () => {
    const fileToWrite = currentDirectoryPath('files', 'fileToWrite.txt');

    const writableStream = fs.createWriteStream(fileToWrite, { encoding: 'utf-8' });

    process.stdin.pipe(writableStream);

    writableStream.on('error', (err) => {
        console.error('Error writing the file:', err.message);
    });

    writableStream.on('end', () => {
        console.log('Finished');
    });

    // Resume stdin so it starts flowing
    process.stdin.resume();
};

await write();