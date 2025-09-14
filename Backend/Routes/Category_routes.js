import express from 'express'
import { createCategory, deleteCategory, getCategories, updateCategory } from '../Controllers/Category_Controller.js';

const categoryrouter = express.Router()

categoryrouter.get('/', getCategories);
categoryrouter.post('/', createCategory);
categoryrouter.put('/:id', updateCategory);
categoryrouter.delete('/:id', deleteCategory);

export default categoryrouter;