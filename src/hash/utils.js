import { access } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const currentDirectoryPath = (folderName, file = '') => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return join(__dirname, folderName, file);
};

export const isFileExists = async filePath => {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
};