const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

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

module.exports = app;