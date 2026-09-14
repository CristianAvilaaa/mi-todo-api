import { Router } from 'express';
import { createCategory } from './category.controller';

const router = Router();

router.post('/', createCategory);

export default router;