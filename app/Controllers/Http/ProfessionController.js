'use strict'
const Profession = use('App/Models/Profession')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with professions
 */
class ProfessionController {
  /**
   * Show a list of all professions.
   * GET professions
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index({ response }) {
    return Profession.all();
  }

  /**
   * Create/save a new profession.
   * POST professions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();
    try {

      return await Profession.create(data)

    } catch (erro) {

      throw erro

    }
  }

  /**
   * Display a single profession.
   * GET professions/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show({ params, response }) {
    const { id } = params
    const profession = await Profession.find(id)

    return profession
      ? response.ok(profession)
      : response.notFound()
  }

  /**
   * Update profession details.
   * PUT or PATCH professions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params
    const data = request.all()
    const profession = await Profession.find(id)

    if (profession) {
      profession.merge(data)
      await profession.save()

      return profession
    }

    await response.notFound()
  }

  /**
   * Delete a profession with id.
   * DELETE professions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params
    const profession = await Profession.find(id)

    if (profession) {
      await profession.delete()
      return response.ok()
    }

    await response.notFound()
  }
}

module.exports = ProfessionController
