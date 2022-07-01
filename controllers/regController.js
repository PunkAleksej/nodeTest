const db = require('../models')
const hasher = require('../passHasher.js');
const { validationResult } = require("express-validator/check")
const jwt = require('jsonwebtoken');



class authController {
    async registration(request, response) {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({
                errors: errors.array()
            });
        }
        const { firstName, lastName, email, password, DoB } = request.body
        const hashedPassword = hasher(password)
        try {
            const user = await db.User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                DoB
            })
            response.status(201).json({message: "registrartion complete"})
        } catch (err) {
            response.status(400).json({ message: 'error'})
        }
    };

    async deleteUser(request, response) {
        try {
            const token = request.headers.authorization;
            if (!token) {
              response.status(400).json({message: "user not auth"})
            }
        
            const profileData = jwt.verify(token, 'SECRET_KEY')
            if (!profileData) {
              response.sendStatus(403);
            }
        
            const id = profileData.id
            const user = await db.User.destroy({
              where : {
                  id
              }
            })
            response.status(200).json(user)
        } catch (err) {
            response.status(400).json({ message: 'error' })
        }
    };

    async getUser(request, response) {
        try {
        const { id } = request.query
        const user = await db.User.findOne({
                where: {
                    id
                }
            })
            response.status(200).json({
                user
            })
        } catch (err) {
            response.status(400).json({ message: 'error' })
        }
    };

    async updateUserInfo(request, response) {
        const token = request.headers.authorization;
        if (!token) {
          response.status(400).json({message: "user not auth"})
        }
    
        const profileData = jwt.verify(token, 'SECRET_KEY')
        if (!profileData) {
          response.sendStatus(403);
        }
    
        const id = profileData.id

        const { firstName, lastName, email, password } = request.body
        console.log(email, id)
        let updateUserInfo = {};

        if (password) {
            updateUserInfo.password = hasher(password)
        }

        if (email) {
            updateUserInfo.email = email
        }

        if (firstName) {
            updateUserInfo.firstName = firstName
        }

        if (lastName) {
            updateUserInfo.lastName = lastName
        }

        try {

            const user = await db.User.update(
                updateUserInfo,
                {
                    where: {
                        id
                    }
                },
            );
            response.status(200).json({
                user
            })
        } catch (err) {
            response.status(400).json({ message: 'error' })
        }
    };


}

module.exports = new authController()