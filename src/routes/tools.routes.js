import { Router } from "express";
import { getTool} from "../controllers/tools.controller.js";
const toolsRoute = Router();

toolsRoute.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/p/:reference/:model", async(req, res)=>{
    const product = {
        categoryId: Number(req.params.categoryId), 
        subcategoryId: Number(req.params.subcategoryId),
        reference: req.params.reference,
    }
    const dataTool = await getTool(product.categoryId, product.subcategoryId, product.reference);
    res.json(dataTool);
} );
toolsRoute.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/:subsubcategoryId/:subsubcategoryName/p/:reference/:model", async(req, res) => {
    const product = {
        categoryId: Number(req.params.categoryId), 
        subcategoryId: Number(req.params.subcategoryId),
        subsubcategoryId: Number(req.params.subsubcategoryId),
        reference: req.params.reference,
    }
    const dataTool = await getTool(product.categoryId, product.subcategoryId, product.reference, product.subsubcategoryId);
    res.json(dataTool);

} );
toolsRoute.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/:subsubcategoryId/:subsubcategoryName/:subsubsubcategoryId/:subsubsubcategoryName/p/:reference/:model", async(req, res) =>{
    const product = {
        categoryId: Number(req.params.categoryId), 
        subcategoryId: Number(req.params.subcategoryId),
        subsubcategoryId: Number(req.params.subsubcategoryId),
        subsubsubcategoryId: Number(req.params.subsubsubcategoryId),
        reference: req.params.reference,
    }
    const dataTool = await getTool(product.categoryId, product.subcategoryId, product.reference, product.subsubcategoryId, product.subsubsubcategoryId);
    res.json(dataTool);
} );

export default toolsRoute;
