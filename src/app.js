import express from "express";
import morgan from "morgan";
import toolsRoute from "./routes/tools.routes.js";
import categoriesRoute from "./routes/categories.routes.js";
import subcategoriesRoute from "./routes/subcategories.routes.js";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use("/", toolsRoute);
app.use("/", categoriesRoute);
app.use("/", subcategoriesRoute);

export default app;