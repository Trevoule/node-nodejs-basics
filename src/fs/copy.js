import {readFile, writeFile, mkdir, readdir } from 'fs/promises';
import { currentDirectoryPath, isFileExists } from '../streams/utils.js';
import { join } from 'path';

const copy = async () => {
    const originFolderPath = currentDirectoryPath('files');
    const copyFolderPath = currentDirectoryPath('files_copy');

    const copyFile = async fileName => {
        const sourceFilePath = join(originFolderPath, fileName);
        const copyFilePath = join(copyFolderPath, fileName);

        try {
            const sourceFileContent = await readFile(sourceFilePath);
            await writeFile(copyFilePath, sourceFileContent);
            console.log('File successfully copied');    
        } catch (err) {
            throw err;
        }
    };
    
    try {
        const isOriginFolderPath = await isFileExists(originFolderPath);
        const isCopyFolderPath = await isFileExists(copyFolderPath);

        isOriginFolderPath && !isCopyFolderPath;
            
        await mkdir(copyFolderPath);
        const files = await readdir(originFolderPath);
        await files.forEach(copyFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
