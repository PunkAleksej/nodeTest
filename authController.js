const { response } = require("express");
const User = require('./models/user')
const crypto = require('crypto');

function hasher(password) {
  return crypto
  .createHmac('sha256', password)
  .update('anyString')
  .digest('hex');
}

class authController {
  async registration (request, response) {
    try {

      const {firtstName, lastName, email, password} = request.body;

      const candidate = await User.findOne({email})
      if (candidate) {
        return response.status(400).json({message: "the user already exists"})
      }

      const user = new User({
        firtstName,
        lastName,
        email,
        password: hasher(password)
      })

    } catch (error) {
      response.status(400).json({message: 'Registration error'})
    }
  }

  async  () {

  }

  async getUsers()
}


module.exports = new authController()