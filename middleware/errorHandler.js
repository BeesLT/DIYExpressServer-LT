export const notFound = (req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        messages: `Route ${req.originalUrl} does not exist`
    });
};

export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);

    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && {
            stack: err.stack
        })
    });
};