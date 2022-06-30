const db = require('../models')
const hasher = require('../passHasher.js');
const { validationResult } = require("express-validator/check")

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
        const { id } = request.body
        try {
            const user = await db.User.destroy({
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
        const { firstName, lastName, email, password, id } = request.body

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


















// class authController {
//   async registration (request, response) {
//     try {

//       const {firtstName, lastName, email, password} = request.body;

//       const candidate = await User.findOne({email})
//       if (candidate) {
//         return response.status(400).json({message: "the user already exists"})
//       }

//       const user = new User({
//         firtstName,
//         lastName,
//         email,
//         password: hasher(password)
//       })

//     } catch (error) {
//       response.status(400).json({message: 'Registration error'})
//     }
//   }

//   async  () {

//   }

//   async getUsers()
// }


// module.exports = new authController()