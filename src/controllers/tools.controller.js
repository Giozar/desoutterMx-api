import Tools from "../models/tools.models.js"
export const getTools = async(categoryId, subcategoryId, subsubcategoryId=null, subsubsubcategoryId=null) => {
    try {
        const tools = await Tools.find({categoryId, subcategoryId, subSubcategoryId:subsubcategoryId, subSubSubcategoryId:subsubsubcategoryId});
        return tools;
    } catch (error) {
        console.log(error);
    }
}

export const getTool = async(categoryId, subcategoryId, reference, subsubcategoryId=null, subsubsubcategoryId=null) => {
    try {
        const tool = await Tools.findOne({categoryId, subcategoryId, subSubcategoryId:subsubcategoryId, subSubSubcategoryId:subsubsubcategoryId, Referencia: reference});
        return tool;
    } catch (error) {
        console.log(error);
    }
}