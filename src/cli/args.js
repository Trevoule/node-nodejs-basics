const parseArgs = () => {
    const args = process.argv.slice(2);
    console.log(args);
    

    const groupedArgs = args.reduce((acc, _, index) => {
        if (index % 2 === 0) {
            acc.push(args.slice(index, index + 2));
        }
        return acc;
    }, []);

    const modifiedArgsString = groupedArgs.map(([key, value]) => {
        const keyString = key.split('--')[1];
        return `${keyString} is ${value}`;
    }).join(', ');    
    console.log(modifiedArgsString);
};

parseArgs();