const express = require('express');

// const flowerRouter = require('../flowers/flowersRouter.js');

const server = express();

server.use(express.json());
// server.use("/flowers", flowerRouter); 

server.get('/', (req, res) => {
    res.status(200).json({ message: "The flower that blooms in adversity is the rarest and most beautiful of all. - Mulan "})
});

server.get('/token', (req, res) => {
    
})

module.exports = server; 


