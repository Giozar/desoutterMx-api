import Tools from "../models/tools.models.js"
export const getTools = async(req, res) => {
    try {
        const tools = await Tools.find();
        res.json(tools);
    } catch (error) {
        
    }
}

export const getTool = async(req, res) => {
    try {
        // res.json({
        //     message: req.params.categoryId + " " + req.params.categoryName + " " + req.params.subcategoryId + " " + req.params.subcategoryName + " " + req.params.reference + " " + req.params.modelName,
        // })
        const product = {
            categoryId: Number(req.params.categoryId), 
            categoryName: req.params.categoryName, 
            subcategoryId: Number(req.params.subcategoryId), 
            subcategoryName: req.params.subcategoryName, 
            reference: req.params.reference+" ", 
            modelName: req.params.modelName,
        }
        const tool = await Tools.findOne({categoryId: product.categoryId, subcategoryId: product.subcategoryId, Referencia: product.reference});

        res.json(tool);
    } catch (error) {
        console.log(error);
    }
}