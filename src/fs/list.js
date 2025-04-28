import fs from 'fs/promises';

import { currentDirectoryPath } from './utils.js';

const list = async () => {
    const filesPath = currentDirectoryPath('files');
    
    try {
        await fs.readdir(filesPath)
        .then(files => files.forEach(file => console.log(file)))
        .catch(err => {
            throw err
        });
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();