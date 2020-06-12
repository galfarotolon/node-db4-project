const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;

    Recipes.findById(id)
        .then(scheme => {
            if (scheme) {
                res.json(scheme);
            } else {
                res.status(404).json({ message: 'Could not find scheme with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipe details' });
        });
});


router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(steps => {
            if (steps.length) {
                res.json(steps);
            } else {
                res.status(404).json({ message: 'Could not find steps for given scheme' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get steps' });
        });
});


router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
        .then(recipe => {
            if (recipe.length) {
                res.json(recipe);
            } else {
                res.status(404).json({ message: 'Could not find instructions for that id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get instructions' });
        });
});



module.exports = router;