import { Router } from "express";
import { getTool, getTools} from "../controllers/tools.controller.js";
const toolsRoute = Router();
toolsRoute.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName", getTools );
toolsRoute.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/p/:reference/:model", getTool );

export default toolsRoute;
