import express from 'express';
import logger from './middleware/logger.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import taskRouter from './routes/tasks.js';
import categoriesRouter from './routes/categories.js';

