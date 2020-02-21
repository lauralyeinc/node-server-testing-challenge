const express = require('express');

const jwt = require('jsonwebtoken'); // token 

// const flowerRouter = require('../flowers/flowersRouter.js');

const server = express();

server.use(express.json());
// server.use("/flowers", flowerRouter); 

server.get('/', (req, res) => {
    res.status(200).json({ message: "The flower that blooms in adversity is the rarest and most beautiful of all. - Mulan "})
});

server.get('/token', (req, res) => {
    const payload = {
        subject: "testertoken",
        userid: "token",
        favoriteflower: "golden mustard garden rose"
    };

    const secret = "thorns";

    const options = {
        expiresIn: '1d'
    };

    const token = jwt.sign(payload, secret, options); 

    res.json(token);
});

module.exports = server; 


