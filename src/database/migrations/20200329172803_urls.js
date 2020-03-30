
exports.up = function(knex) {
    return knex.schema
    .createTable('urls', function (table) {
       table.increments('id');
       table.string('url_long', 255).notNullable();
       table.string('url_short', 50).notNullable();
       table.integer('count').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('urls');
};
