import { Router } from "express";
import { contact, quote } from "../controllers/mail.controller.js";

const mailRoutes = Router();

mailRoutes.post("/contacto", contact);
mailRoutes.post("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/p/:reference/:model",quote);
mailRoutes.post("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/:subsubcategoryId/:subsubcategoryName/p/:reference/:model",quote);
mailRoutes.post("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/:subsubcategoryId/:subsubcategoryName/:subsubsubcategoryId/:subsubsubcategoryName/p/:reference/:model",quote);

export default mailRoutes;