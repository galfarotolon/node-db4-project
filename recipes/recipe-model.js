
const db = require('../data/db-config.js');


module.exports = {
    getRecipes,
    findById,
    getShoppingList,
    getInstructions,
}


function getRecipes() {
    return db('recipes');
}

function findById(id) {
    return db('recipes').where({ id }).first();
}

function getShoppingList(id) {
    return db('ingredients')

        .join('recipe_details', 'recipe_details.recipe_id', 'ingredients.id')
        .where('ingredients.id', id)
        //.join('ingredients', 'recipe_details.ingredients_id', 'ingredients.id')
        .select('ingredients.name', 'recipe_details.quantity')
}


// SELECT r.name, i.name ingredientName, quantity
// FROM recipe_details 
// JOIN recipes  ON r.id = rd.recipe_id
// JOIN ingredients as i on i.id = rd.ingredient_id

function getInstructions(id) {
    return db('recipes')
        .join('instructions_table', 'recipes.id', 'instructions_table.recipe_id')
        .where('recipes.id', id)
        .select('instructions_table.step_number', 'instructions_table.instructions', 'recipes.name')
}