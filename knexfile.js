// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipebook.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // pool: {
    //   afterCreate: function (conn, done) {
    //     conn.run('PRAGMA foreign_keys = ON', done) //all this pool object has to be added in order to 
    //   },    //allow tables to acces foreign keys and other table data
    // },
  },



  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
