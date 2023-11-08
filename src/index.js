import app from './app.js';
import { PORT } from './config/config.js';
import { connectDB } from './db.js';

app.listen(PORT);
console.log('server port', PORT);
connectDB();