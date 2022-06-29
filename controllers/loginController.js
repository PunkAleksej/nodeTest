const { response } = require('express');
const db = require('../models')
const hasher  = require('../passHasher.js');
const jwt = require('jsonwebtoken');


const generateAccessToken = (id) => {
  const payload = {
      id
  }
  return jwt.sign(payload, '1', {expiresIn: "24h"} )
}


class loginController {
  async login (request, response) {
    try {
      const {email, password} = request.body;
      const user = await db.User.findOne({
        where: {email}
      })

      if (!user) {
        return response.status(400).json({message: `Пользователь ${email} не найден`})
      }

      const validatePassword = hasher(password);
      if (validatePassword !== user.password) {
        return response.status(400).json({message: `Введен неверный пароль`})
      }
      const token = generateAccessToken(user._id)
      return response.json({token})
    } catch (error) {
      response.status(400).json({message: error.message})
    }
  }
}

module.exports = new loginController;