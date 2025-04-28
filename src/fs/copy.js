import fs from 'fs/promises';
import { join } from 'path';

import { currentDirectoryPath, isFileExists } from './utils.js';

const copy = async () => {
    const originFolderPath = currentDirectoryPath('files');
    const copyFolderPath = currentDirectoryPath('files_copy');

    const copyFile = async fileName => {
        const sourceFilePath = join(originFolderPath, fileName);
        const copyFilePath = join(copyFolderPath, fileName);

        try {
            const sourceFileContent = await fs.readFile(sourceFilePath);
            await fs.writeFile(copyFilePath, sourceFileContent);
            console.log('File successfully copied');    
        } catch (err) {
            throw err;
        }
    };
    
    try {
        const isOriginFolderPath = await isFileExists(originFolderPath);
        const isCopyFolderPath = await isFileExists(copyFolderPath);

        isOriginFolderPath && !isCopyFolderPath;
            
        await fs.mkdir(copyFolderPath);
        const files = await fs.readdir(originFolderPath);
        await files.forEach(copyFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
