'use strict'

class CreateUser {
  get rules () {
    return {
      age: 'required',
      educationPlace: 'required',
      educationField: 'required',
      gender: 'required'
    }
  }
}

module.exports = CreateUser
