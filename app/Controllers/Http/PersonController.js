'use strict'
const Person = use('App/Models/Person')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with people
 */
class PersonController {
  /**
   * Show a list of all people.
   * GET people
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index({ response }) {
    return await Person.all()
  }

  /**
   * Create/save a new person.
   * POST people
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();
    try {

      return await Person.create(data)

    } catch (erro) {

      throw erro

    }
  }

  /**
   * Display a single person.
   * GET people/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show({ params, response }) {
    const { id } = params
    const person = await Person.find(id)

    return person
      ? response.ok(person)
      : response.notFound()
  }

  /**
   * Update person details.
   * PUT or PATCH people/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params
    const data = request.all()
    const person = await Person.find(id)

    if (person) {
      person.merge(data)
      await person.save()

      return response.ok(person)
    }

    return response.notFound()
  }

  /**
   * Delete a person with id.
   * DELETE people/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const { id } = params
    const person = await Person.find(id)

    if (person) {
      await person.delete()
      return response.ok(person)
    }

    await response.notFound()
  }
}

module.exports = PersonController
