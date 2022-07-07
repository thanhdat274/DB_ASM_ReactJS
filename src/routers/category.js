import express from 'express'
import { AddCate, DeleteCategory, ListCategory, ListCategoryAndProduct, ListCategoryDetail, UpdateCategory } from '../controllers/categorry';

const CateRouter = express.Router();

CateRouter.get('/category', ListCategory)
CateRouter.post('/category', AddCate)
CateRouter.get('/category/:id', ListCategoryAndProduct)
CateRouter.delete('/category/:id', DeleteCategory)
CateRouter.put('/category/:id', UpdateCategory)

export default CateRouter