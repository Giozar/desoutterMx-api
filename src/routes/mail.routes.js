import { Router } from "express";
import { contact, quote } from "../controllers/mail.controller.js";

const mailRoutes = Router();

mailRoutes.post("/contacto", contact);
mailRoutes.post(quote);

export default mailRoutes;