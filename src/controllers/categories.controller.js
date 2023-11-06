import Categories from "../models/categories.models.js";


export const getCategories = async (req, res) => {
    try {
        const categories = await Categories.find();

        res.json(categories);
    } catch (error) {
        console.log(error);
    }
}