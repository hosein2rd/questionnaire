'use strict'

const Question = use('App/Models/Question')

class QuestionController {
  async createQuestion({ request }) {
    const { text, canChoose, answerCount } = request.all()
    
    const question = new Question()

    question.text = text
    question.can_choose = canChoose
    if (!canChoose)
      question.answer_count = answerCount
    
    await question.save()

    return {
      success: true
    }
  }
  
  async getAnswers() {
    const questions = await Question.query().with('answers').fetch()

    return {
      success: true,
      questions
    }
  }

  async getAnswersOfQuestion({ params }) {
    const question = await Question.findOrFail(params.id)
    await question.load('answers')
    
    return {
      success: true,
      question
    }
  }

  async getQuestions() {
    const questions = await Question.all()

    return {
      success: true,
      questions
    }
  }
}

module.exports = QuestionController
