import { rename as renameFile } from 'fs/promises';

import { isFileExists, currentDirectoryPath } from './utils.js';

const WRONG_FILE = 'wrongFilename.txt';
const PROPER_FILE = 'properFilename.md';

const rename = async () => {
    const wrongFilePath = currentDirectoryPath('files', WRONG_FILE);
    const properFilePath = currentDirectoryPath('files', PROPER_FILE);
    
    try {
        const isWrongFilenamePath = await isFileExists(wrongFilePath);
        const isProperFileNamePath = await isFileExists(properFilePath);
        
        try {
            isWrongFilenamePath && !isProperFileNamePath;
            await renameFile(wrongFilePath, properFilePath)
            console.log('File renamed');
        } catch(err) {
            throw err;
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();