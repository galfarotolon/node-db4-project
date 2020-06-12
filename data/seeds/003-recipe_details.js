
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_details')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([

        {

          recipe_id: 1,
          ingredient_id: 1,
          quantity: 4


        },

        {

          recipe_id: 1,
          ingredient_id: 2,
          quantity: 3


        },

        {

          recipe_id: 1,
          ingredient_id: 3,
          quantity: 2


        },
        {

          recipe_id: 1,
          ingredient_id: 4,
          quantity: 7


        },
        {

          recipe_id: 1,
          ingredient_id: 5,
          quantity: 3


        },


      ]);
    });
};
