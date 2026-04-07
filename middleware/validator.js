export const validateTask = (req, res, next) => {
    const { title } = req.body;

    if (!title) {
        errors.push('Title is required');
    }

    if (title && title.length < 3) {
        errors.push('Title must be at least 3 characters');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};