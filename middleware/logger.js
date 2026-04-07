const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;

    console.log(`[${timestamp}] ${method} ${url}`);

    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${timestamp}] ${method} ${url}
            - ${res.statusCode} (${duration}ms)`)
    });

    next();
};

export default logger;