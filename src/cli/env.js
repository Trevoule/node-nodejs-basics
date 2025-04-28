const parseEnv = () => {
    const envs = Object.entries(process.env);

    const RSSEnvs = envs.reduce((acc, [key, value]) => {
        if (key.includes('RSS_')) {
            acc.push(`${key}=${value}`);
        }
        return acc;
    }, []).join('; ');

    console.log(RSSEnvs);
};

parseEnv();