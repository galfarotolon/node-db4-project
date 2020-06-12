
exports.up = function (knex) {


    return knex.schema.table('recipe_details', tbl => {

        tbl.dropColumn('name')
    })


};

exports.down = function (knex) {

    return knex.schema.table('recipe_details', tbl => {

        tbl.string('name');

    })



};
