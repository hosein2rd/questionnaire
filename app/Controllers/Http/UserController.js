'use strict'

const User = use('App/Models/User')

class UserController {
  async createUser({ request }) {
    const { age, educationPlace, educationField, gender } = request.all()

    const user = new User()

    user.age = age
    user.education_place = educationPlace
    user.education_field = educationField

    if (![
          User.GENDER.MALE,
          User.GENDER.FEMALE,
          User.GENDER.UNWILLING
        ].includes(gender)
    ) {
        const error = new Error()
        error.name = 'ValidationException'
        error.messages = 'Invalid Gender'
        error.status = 400
        throw error
    }

    user.gender = gender

    await user.save()

    return {
      success: true
    }
  }
  
  async getAnswers() {
    const users = await User.query().with('answers').fetch()

    return {
      success: true,
      users
    }
  }
}

module.exports = UserController
