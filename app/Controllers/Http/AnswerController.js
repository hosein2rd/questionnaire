'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {
  async createAnswer({ request }) {
    const { userId, questionId, response } = request.all()

    const answer = new Answer()

    answer.user_id = userId
    answer.question_id = questionId
    answer.answer = response

    await answer.save()

    return {
      success: true
    }
  }

  async getAll() {
    const answers = await Answer.query().with('question').fetch()

    return {
      success: true,
      answers
    }
  }
}

module.exports = AnswerController
