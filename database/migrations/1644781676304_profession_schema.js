'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessionSchema extends Schema {
  up() {
    this.create('professions', (table) => {
      table.string("name").unique().notNullable()
      table.text("description")
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('professions')
  }
}

module.exports = ProfessionSchema
