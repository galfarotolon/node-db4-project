const express = require('express');

//const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
// server.use('/api/recipe', RecipeRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;