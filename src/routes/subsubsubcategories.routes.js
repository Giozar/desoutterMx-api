import { Router } from "express";
import { getTools } from "../controllers/tools.controller.js";
import { getSubsubsubcategories } from "../controllers/subsubsubcategories.controller.js";
const subsubsubcategoriesRoute = Router();

subsubsubcategoriesRoute.get("/herramientas/:categoryId/:categoryName/:subcategoryId/:subcategoryName/:subsubcategoryId/:subsubcategoryName", async (req, res) => {

    const products = {
        categoryId: Number(req.params.categoryId), 
        subcategoryId: Number(req.params.subcategoryId),
        subsubcategoryId: Number(req.params.subsubcategoryId),
    }

    const dataSubsubsubcategories = await getSubsubsubcategories(products.categoryId, products.subcategoryId, products.subsubcategoryId);

    if(dataSubsubsubcategories.length <= 0){
        const dataTools = await getTools(products.categoryId, products.subcategoryId, products.subsubcategoryId);
        // if (dataTools.length>0) {
        //     console.log('consulta hay productos');
        // }else{
        //     console.log('Consulta no hay productos');
        // }
        res.json(dataTools);
        return 0;
    }
    
    // console.log('Consulta hay subsubcategorias');
    res.json(dataSubsubsubcategories[0]);
});

export default subsubsubcategoriesRoute;