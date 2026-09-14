import { Request, Response } from 'express';
import { Category } from './category.model';

export const createCategory = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ message: 'La categoría ya existe' });
    }

    const newCategory = new Category({ name, description });
    const savedCategory = await newCategory.save();

    return res.status(201).json(savedCategory);
  } catch (error: any) {
    return res.status(500).json({
      message: 'Error al crear la categoría',
      error: error.message,
    });
  }
};