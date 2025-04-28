import fs from 'fs/promises';

import { currentDirectoryPath } from './utils.js';

const FILE_TO_READ = 'fileToRead.txt';

const read = async () => {
    const fileToReadPath = currentDirectoryPath('files', FILE_TO_READ);

    try {
        await fs.access(fileToReadPath);
        const content = await fs.readFile(fileToReadPath, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();