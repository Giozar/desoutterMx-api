import express from "express";
import morgan from "morgan";
import toolsRoute from "./routes/tools.routes.js";
import categoriesRoute from "./routes/categories.routes.js";
import subcategoriesRoute from "./routes/subcategories.routes.js";
import cors from "cors";
import { clientPort } from "./config/config.js";

const app = express();

// Cors
app.use(cors({
    origin: clientPort,
    credentials: true,
}));


app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use("/", toolsRoute);
app.use("/", categoriesRoute);
app.use("/", subcategoriesRoute);

export default app;