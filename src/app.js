import express from "express";
import cors from "cors";
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        console.log(`Server is running in http://localhost:3003`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app