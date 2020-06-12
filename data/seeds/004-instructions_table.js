
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions_table')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions_table').insert([

        {
          recipe_id: 1,
          step_number: 1,
          instructions: 'add cheese'

        },

        {
          recipe_id: 1,
          step_number: 2,
          instructions: 'add tomato sauce'

        },

        {
          recipe_id: 1,
          step_number: 3,
          instructions: 'put in oven'

        },

      ]);
    });
};
