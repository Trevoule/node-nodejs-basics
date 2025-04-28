import fs from 'fs';
import crypto from 'crypto';
import { currentDirectoryPath } from './utils.js';

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