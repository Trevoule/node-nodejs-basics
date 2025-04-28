import { rm } from 'fs/promises';
import { currentDirectoryPath, isFileExists } from '../streams/utils.js';

const FILE_TO_REMOVE = 'fileToRemove.txt';

const remove = async () => {
    // Write your code here 
    const fileToRemovePath = currentDirectoryPath('files', FILE_TO_REMOVE);

    try {
        await isFileExists(fileToRemovePath);

        await rm(fileToRemovePath);
        console.log('File successfully removed');
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();