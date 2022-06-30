const { response } = require('express');
const jwt = require('jsonwebtoken');

const db = require('../models')
const hasher = require('../passHasher.js');


const generateAccessToken = (id) => {
  const payload = {
    id
  }
  return jwt.sign(payload, '1', { expiresIn: "24h" })
}



async function login(request, response) {
  try {
    const { email, password } = request.body;
    const user = await db.User.scope('withPassword').findOne({
      where:  { email } 
    })

    if (!user) {
      return response.status(400).json({ message: `Пользователь ${email} не найден` })
    }

    const validatePassword = hasher(password);
    if (validatePassword !== user.password) {
      return response.status(404).json({ message: 'Введен неверный пароль' })
    }
    const token = generateAccessToken(user._id)
    return response.json({ token })
  } catch (error) {
    response.status(500).json({ message: 'error'})
  }
}


async function testLogin (request,response) {
  try {
    const { token } = request.body;
    console.log(token)
  } catch (error) {
    response.status(500).json({ message: 'error'})
  }
}


module.exports = {login, testLogin};