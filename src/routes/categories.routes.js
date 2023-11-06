import { Router } from "express";
import { getCategories } from "../controllers/categories.controller.js";
const categoriesRoute = Router();
categoriesRoute.get("/herramientas", getCategories );

export default categoriesRoute;
