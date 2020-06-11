
exports.up = function (knex) {

    return knex.schema.table('instructions_table', tbl => {

        tbl.string('instructions');

    })

};

exports.down = function (knex) {

    return knex.schema.dropColumn('instructions')

};
