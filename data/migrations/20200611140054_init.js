exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('name', 255).notNullable().index()
    })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('name', 255).notNullable().index()
        })
        .createTable('recipe_details', tbl => {
            tbl.increments()
            tbl.string('name', 255).notNullable().index()
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('recipes.id')
                .onDelete('RESTRICT') // restrict, cascade, set null, do nothing
                .onUpdate('CASCADE')
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('ingredients.id')
                .onDelete('RESTRICT') // restrict, cascade, set null, do nothing
                .onUpdate('CASCADE')
            tbl
                .integer('quantity')
                .unsigned()
                .notNullable()
        })
        .createTable('instructions_table', tbl => {
            tbl.increments()
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('recipes.id')
                .onDelete('RESTRICT') // restrict, cascade, set null, do nothing
                .onUpdate('CASCADE')
            tbl
                .integer('step_number')
                .unsigned()
                .notNullable()
        })
};
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions_table')
        .dropTableIfExists('recipe_details')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
