import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(data, _, callback) {
        const reversed = data.toString().split('').reverse().join('');
        this.push(reversed);
        callback();
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);

    reverseTransform.on('error', (err) => {
        console.error('Transform stream error:', err.message);
    });

    process.stdin.on('error', (err) => {
        console.error('Stdin error:', err.message);
    
    });
    
    process.stdout.on('error', (err) => {
        console.error('Stdout error:', err.message);
    });
}

await transform();