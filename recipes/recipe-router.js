const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.find()
        .then(schemes => {
            res.json(schemes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get schemes' });
        });
});



module.exports = router;