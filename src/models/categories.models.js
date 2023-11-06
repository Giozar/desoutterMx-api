import moongose from 'mongoose';
const CategoriesSchema = new moongose.Schema({});
export default moongose.model('categories', CategoriesSchema)