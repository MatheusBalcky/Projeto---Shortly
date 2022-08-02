import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import route from './routes/routes.js';
dotenv.config();

const app = express();
app.use(express.json(), cors());

app.use(route)


app.listen(process.env.PORT, console.log(`Server running at port ${process.env.PORT}`));