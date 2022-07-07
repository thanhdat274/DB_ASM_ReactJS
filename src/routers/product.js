import express from 'express'
import { AddProduct, DeleteProduct, ListProduct, ListProductDetail, UpdateProduct } from '../controllers/product';
import { UserById } from '../controllers/user';
import { isAdmin, isAuth, requiredSignin } from '../middlewares/checkAuth';

const productRouter = express.Router();

productRouter.get('/products', ListProduct)
productRouter.post('/products/:userId', requiredSignin, isAuth, isAdmin, AddProduct)
productRouter.get('/products/:id', ListProductDetail)
productRouter.delete('/products/:id', DeleteProduct)
productRouter.put('/products/:id', UpdateProduct)

productRouter.param("userId", UserById)
export default productRouter