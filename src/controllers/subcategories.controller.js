import Subcategories from "../models/subcategories.models.js";

export const getAllSubcategories = async(req, res) => {
    try {
        const subcategories = await Subcategories.find();
        return subcategories;
    } catch (error) {
        console.log(error);
    }
}

export const getSubcategories = async(req, res) => {
    const {categoryId} = req.params;

    const catId =  Number(categoryId);
    try {
        const subcategories = await Subcategories.find({"0.categoryId":catId});

        res.json(subcategories[0]);
        
    } catch (error) {
        console.log(error);
    }
}