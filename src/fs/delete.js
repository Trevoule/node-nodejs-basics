import fs from 'fs/promises';

import { currentDirectoryPath, isFileExists } from './utils.js';

const FILE_TO_REMOVE = 'fileToRemove.txt';

const remove = async () => {
    const fileToRemovePath = currentDirectoryPath('files', FILE_TO_REMOVE);

    try {
        await isFileExists(fileToRemovePath);

        await fs.rm(fileToRemovePath);
        console.log('File successfully removed');
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();