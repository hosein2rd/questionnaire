'use strict'

const Admin = use('App/Models/Admin')

class AdminController {
  async create({ request }) {
    const { name, password, email } = request.all()

    const admin = new Admin()

    admin.name = name
    admin.password = password
    admin.email = email

    await admin.save()

    return {
      success: true
    }
  }

  async login({ request, auth }) {
    const { email, password } = request.all()

    const { token } = await auth.attempt(email, password)

    return {
      success: true,
      token
    }
  }
}

module.exports = AdminController
