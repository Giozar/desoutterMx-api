import { Router } from "express";
import { getSubsubcategories } from "../controllers/subsubcategories.controller.js";
import { getTools } from "../controllers/tools.controller.js";
const subsubcategoriesRoute = Router();

subsubcategoriesRoute.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName", async (req, res) => {

    const products = {
        categoryId: Number(req.params.categoryId), 
        subcategoryId: Number(req.params.subcategoryId),
    }

    const dataSubsubcategories = await getSubsubcategories(products.categoryId, products.subcategoryId);

    if(dataSubsubcategories.length <= 0){
        const dataTools = await getTools(products.categoryId, products.subcategoryId);
        // if (dataTools.length>0) {
        //     console.log('consulta hay productos');
        // }else{
        //     console.log('Consulta no hay productos');
        // }
        res.json(dataTools);
        return 0;
    }
    
    // console.log('Consulta hay subsubcategorias');
    res.json(dataSubsubcategories[0]);
});

export default subsubcategoriesRoute;