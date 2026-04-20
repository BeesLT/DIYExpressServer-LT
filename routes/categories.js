import express from 'express';
import { categories, tasks, getNextId } from '../data/storage.js';

const catRouter = express.Router();

catRouter.get('/', (req, res) => {
    res.json(categories);
});

catRouter.get('/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));

    if (!category) {
        return res.status(404).json({ error: 'Category not found'});
    }

    res.json(category);
});

catRouter.get('/:id/tasks', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));

    if (!category) {
        return res.status(404).json({ error: 'Category not found' });
    }
    const categoryTasks = tasks.filter(t => t.categoryId === category.id);
    res.json(categoryTasks);
});

catRouter.post('/', (req, res) => {
    const { name } = req.body;
    const newCategory = {
        id: getNextId(categories),
        name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

catRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = categories.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const { name } = req.body;

    categories[index] = {
        ...categories[index],
        name: name || categories[index].name
    };
    res.json(categories[index]);
});

catRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = categories.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Category not found' });
    }
    categories.splice(index, 1);
    res.json({ message: 'Category deleted' });
});

export default catRouter;