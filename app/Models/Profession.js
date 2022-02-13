'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profession extends Model {
  persons() {
    return this.hasMany('App/Models/Person')
  }
}

module.exports = Profession
