import fs from 'fs/promises';

import { currentDirectoryPath } from './utils.js';

const FILE = 'fresh.txt';
const CONTENT = 'I am fresh and young';

const create = async () => {
    const filePath = currentDirectoryPath('files', FILE);
    
    try {
        await fs.writeFile(filePath, CONTENT, { flag: 'wx' });
        console.log('File created');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();