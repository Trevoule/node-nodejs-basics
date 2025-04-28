import { access, readFile } from 'fs/promises';
import { currentDirectoryPath } from '../streams/utils.js';

const FILE_TO_READ = 'fileToRead.txt';

const read = async () => {
    const fileToReadPath = currentDirectoryPath('files', FILE_TO_READ);

    try {
        await access(fileToReadPath);
        const content = await readFile(fileToReadPath, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();