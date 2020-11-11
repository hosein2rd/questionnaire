'use strict'

class Answer {
  get rules () {
    return {
      userId: 'required',
      questionId: 'required',
      response: 'required'
    }
  }
}

module.exports = Answer
