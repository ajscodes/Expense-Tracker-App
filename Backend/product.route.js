import express from 'express';
import { addProduct, deleteById, editById, getById, getProduct } from './product.controller.js';

const router = express.Router();

router.get('/' , getProduct);
router.get('/:id' , getById);
router.post('/' , addProduct);
router.patch('/:id' , editById);
router.delete('/:id' , deleteById)

export default router;