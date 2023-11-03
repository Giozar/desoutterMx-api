import { Router } from "express";
import { getTool, getTools } from "../controllers/tools.controller.js";
const router = Router();
router.get("/herramientas", getTools );
router.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/p/:reference/:modelName", getTool );

export default router;
