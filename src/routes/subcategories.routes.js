import { Router } from "express";
import { getSubcategories } from "../controllers/subcategories.controller.js";
const subcategoriesRoute = Router();
subcategoriesRoute.get('/herramientas/:categoryId/:categoryName', getSubcategories);
export default subcategoriesRoute;