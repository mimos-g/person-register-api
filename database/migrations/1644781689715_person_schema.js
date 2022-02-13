'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.string('name', 100).notNullable()
      table.string('phone', 100).unique().notNullable()
      table.string('email', 100).unique().notNullable()
      table.integer('profession_id').unsigned().notNullable().references('id').inTable('professions')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PersonSchema
