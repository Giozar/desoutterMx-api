import express from "express";
import morgan from "morgan";
import toolRoute from "./routes/tools.routes.js";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use("/", toolRoute);

export default app;