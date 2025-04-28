import fs from 'fs';
import crypto from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDirectoryPath = (folderName, file = '') => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return join(__dirname, folderName, file);
};

const calculateHash = async () => {
    const fileToCalculatePath = currentDirectoryPath('files', 'fileToCalculateHashFor.txt');

    try {
        const hashValue = await new Promise((resolve, reject) => {
            const hash = crypto.createHash('sha256');
            const rs = fs.createReadStream(fileToCalculatePath);
            rs.on('error', reject);
            rs.on('data', chunk => hash.update(chunk));
            rs.on('end', () => resolve(hash.digest('hex')))
        });
        console.log(hashValue);
    } catch (error) {
    console.error('Error:', error);
    }    
};

await calculateHash();