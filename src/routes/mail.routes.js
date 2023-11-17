import { Router } from "express";
import { contact } from "../controllers/mail.controller.js";

const mailRoutes = Router();

mailRoutes.post("/contacto", contact);

export default mailRoutes;