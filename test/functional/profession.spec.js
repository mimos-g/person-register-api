'use strict'

const { before, beforeEach, after, afterEach, test, trait } = use('Test/Suite')('Profession')
const Profession = use('App/Models/Profession')
const Database = use('Database')

trait('Test/ApiClient')

const fakeProfession = {
  name: 'profession',
  description: 'testing...'
}

const fakeProfessionUpdated = {
  name: 'profession updated',
  description: 'testing update...'
}

test('make sure post profession is workin (Add Profession)', async ({ client }) => {

  const profession = await client
    .post('professions')
    .send(fakeProfession)
    .end()

  profession.assertStatus(200)
})

test('make sure get professions is workin (List Professions)', async ({ client }) => {

  const profession = await client
    .get('professions')
    .end()

  profession.assertStatus(200)
  profession.assertJSONSubset([fakeProfession])
})


test('make sure get profession is workin (Show Profession)', async ({ client }) => {

  const { id } = await Database.from('professions').max('id as id').first()

  const profession = await client
    .get(`professions/${id}`)
    .end()

  profession.assertStatus(200)
  profession.assertJSONSubset(fakeProfession)
})

test('make sure update profession is workin (Update Profession)', async ({ client }) => {

  const { id } = await Database.from('professions').max('id as id').first()

  const profession = await client
    .patch(`professions/${id}`)
    .send(fakeProfessionUpdated)
    .end()

  profession.assertStatus(200)
  profession.assertJSONSubset(fakeProfessionUpdated)
})

test('make sure delete profession is workin (Delete Profession)', async ({ client }) => {

  const { id } = await Database.from('professions').max('id as id').first()

  const profession = await client
    .delete(`professions/${id}`)
    .end()

  profession.assertStatus(200)
})




