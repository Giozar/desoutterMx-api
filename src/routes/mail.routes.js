import { Router } from "express";
import { contact } from "../controllers/mail.controller.js";

const mailRoutes = Router();

mailRoutes.post("/contacto", contact);
mailRoutes.post("/contacto/cotizar", contact);
mailRoutes.post("/contacto/demo", contact);
mailRoutes.post("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/p/:reference/:model",contact);
mailRoutes.post("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/:subsubcategoryId/:subsubcategoryName/p/:reference/:model",contact);
mailRoutes.post("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/:subsubcategoryId/:subsubcategoryName/:subsubsubcategoryId/:subsubsubcategoryName/p/:reference/:model",contact);

export default mailRoutes;