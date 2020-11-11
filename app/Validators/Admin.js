'use strict'

class Admin {
  get rules () {
    return {
      name: 'required',
      email: 'required|email',
      password: 'required',
    }
  }
}

module.exports = Admin
