'use strict'

class Question {
  get rules () {
    return {
      text: 'required',
      canChoose: 'required',
    }
  }
}

module.exports = Question
