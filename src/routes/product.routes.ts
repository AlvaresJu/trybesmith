import express from 'express';
import ProductController from '../controllers/product.controller';
import validateProductFields from '../middlewares/productFields.middleware';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.post('/', validateProductFields, (req, res) => productController.insert(req, res));
productRouter.get('/', (req, res) => productController.getAll(req, res));

export default productRouter;
