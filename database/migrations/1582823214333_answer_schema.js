'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
      table.integer('question_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('questions')
      table.string('answer').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
