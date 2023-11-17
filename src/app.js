import express from "express";
import morgan from "morgan";
import toolsRoute from "./routes/tools.routes.js";
import categoriesRoute from "./routes/categories.routes.js";
import subcategoriesRoute from "./routes/subcategories.routes.js";
import cors from "cors";
import { clientPort } from "./config/config.js";
import subsubcategoriesRoute from "./routes/subsubcategories.routes.js";
import subsubsubcategoriesRoute from "./routes/subsubsubcategories.routes.js";
import mailRoutes from "./routes/mail.routes.js";
import path from 'path'

const app = express();

// Cors
app.use(cors({
    origin: clientPort,
    credentials: true,
}));


app.use(morgan('dev'));
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json('Bienvenido');
});

// Rutas
app.use(mailRoutes)
app.use(categoriesRoute);
app.use(subcategoriesRoute);
app.use(subsubcategoriesRoute);
app.use(toolsRoute);
app.use(subsubsubcategoriesRoute);

// 404
app.use((req, res, next) => {
    return res.status(404).json({
        message: 'endpoint not found',
    })
})


// nodemailer
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join("public")));

export default app;