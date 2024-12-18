const mongoose = require('mongoose');
const routes = require('./Routes/index');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();


app.use(bodyParser.json());


app.use((req, res, next) => {    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/', routes);


app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});


const PORT = process.env.PORT || 5020;
const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://obgangadhare:Omkar%401998@cluster1.etpty.mongodb.net/";


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error.message);
    });
