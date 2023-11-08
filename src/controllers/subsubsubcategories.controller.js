import SubsubsubcategoriesSchema from "../models/subsubsubcategories.models.js";

export const getSubsubsubcategories = async (categoryId, subcategoryId, subsubcategoryId) => {
    try {
        const subsubsubcategories = await SubsubsubcategoriesSchema.find({"0.categoryId": categoryId, "0.subcategoryId": subcategoryId, "0.subsubcategoryId": subsubcategoryId});
        return subsubsubcategories;
    } catch (error) {
        console.log(error);
    }
}