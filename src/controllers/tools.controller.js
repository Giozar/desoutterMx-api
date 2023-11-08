import Tools from "../models/tools.models.js"
export const getTools = async(categoryId, subcategoryId) => {
    try {
        // const products = {
        //     categoryId: Number(req.params.categoryId), 
        //     subcategoryId: Number(req.params.subcategoryId),
        // }
        const tools = await Tools.find({categoryId, subcategoryId});
        return tools;
    } catch (error) {
        console.log(error);
    }
}

export const getTool = async(req, res) => {
    try {
        const product = {
            categoryId: Number(req.params.categoryId), 
            categoryName: req.params.categoryName, 
            subcategoryId: Number(req.params.subcategoryId), 
            subcategoryName: req.params.subcategoryName, 
            reference: req.params.reference, 
            modelName: req.params.modelName,
        }
        const tool = await Tools.findOne({categoryId: product.categoryId, subcategoryId: product.subcategoryId, Referencia: product.reference});

        res.json(tool);
    } catch (error) {
        console.log(error);
    }
}