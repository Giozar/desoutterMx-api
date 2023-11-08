import Subsubcategories from "../models/subsubcategories.models.js";

export const getSubsubcategories = async(categoryId, subcategoryId) => {
    try {
        const subsubcategories = await Subsubcategories.find({"0.categoryId":categoryId, "0.subcategoryId":subcategoryId});
        return subsubcategories;
    } catch (error) {
        console.log(error);
    }
}