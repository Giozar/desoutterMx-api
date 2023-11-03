import moongose from 'mongoose';
const ToolSchema = new moongose.Schema({});
export default moongose.model('tools', ToolSchema)