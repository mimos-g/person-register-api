'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Person extends Model {
  profession() {
    return this.belongsTo('App/Models/Profession')
  }
}

module.exports = Person
