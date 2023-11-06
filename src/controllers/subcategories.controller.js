import Subcategories from "../models/subcategories.models.js";

export const getSubcategories = async(req, res) => {
    const {categoryId} = req.params;

    const catId =  Number(categoryId);
    try {
        const subcategories = await Subcategories.find({"0.categoryId":catId});

        res.json(subcategories);
        
    } catch (error) {
        console.log(error);
    }
}