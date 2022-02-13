'use strict'
const Profession = use('App/Models/Profession')
const Person = use('App/Models/Person')

/*
|--------------------------------------------------------------------------
| InitialDatumSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class InitialDatumSeeder {
  async run() {
    try {
      const profession = await Profession.create(
        {
          name: 'Software Enginner',
          description: ''
        }
      )

      await Person.createMany([
        {
          name: 'Ricardo Ragmer',
          phone: '+ 55 43 999999',
          email: 'ricardo.fagmer@biosistemico.br',
          profession_id: profession.id,

        },
        {
          name: 'Victor Hugo',
          phone: '+ 55 42 999999',
          email: 'Victor.Hugo@biosistemico.br',
          profession_id: profession.id,
        }
      ])

    } catch (error) {

      console.error(error);

    }
  }
}

module.exports = InitialDatumSeeder
