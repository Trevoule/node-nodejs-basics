import { Worker } from 'worker_threads';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDirectoryPath = (file) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return join(__dirname, file);
};

const CPUS_COUNT = 8;

function createWorker(cpuNo) {
    return new Promise(async (resolve) => {
        const workerPath = await currentDirectoryPath('worker.js');
        const worker = new Worker(workerPath);

        worker.once('message', (message) => {
            resolve(message);
            worker.terminate();
        });

        worker.once('error', (message) => {
            resolve(message);
        });

        worker.postMessage(cpuNo + 10);
    });
}

const performCalculations = async () => {
    const workerPromises = [];

    for (let i = 0; i < CPUS_COUNT; i++){
        workerPromises.push(createWorker(i));
    };

    const results = await Promise.all(workerPromises);
    console.log(results);
    };

await performCalculations();