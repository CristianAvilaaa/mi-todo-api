import { Router } from 'express';
import { createCategory } from '../modules/tasks/categories/category.controller.js';

const router = Router();

// Define la ruta POST para crear categorías
router.post('/', createCategory);

export default router;