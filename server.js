import express from 'express';
import logger from './middleware/logger.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import router from './routes/tasks.js';
import catRouter from './routes/categories.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.json({
        message: 'Task Management API',
        endpoints: { tasks: '/api/tasks',
                    categories: '/api/categories'}
    });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});