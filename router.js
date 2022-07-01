const Router = require('express');
const { check, checkSchema, validationResult } = require("express-validator")
const router = new Router();
const validate = require('./middlewares/validate')

const regController = require('./controllers/regController');
const loginController = require('./controllers/loginController');
const registrationSchema = require('./middlewares/regMiddleware')



router.post("/registration", [
  check('firstName', "Имя пользователя не может быть пустым").notEmpty(),
  check('lastName', "Фамилия пользователя не может быть пустой").notEmpty(),
  check('email', "Email пользователя не может быть пустым").notEmpty(),
  check('DoB', "Дата рождения пользователя не может быть пустой").notEmpty(),
  check('password', "Пароль должен быть меньше 8 и больше 20 символов").isLength({ min: 8, max: 20 })
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).jsonp(errors.array());
    }
    regController.registration(request, response)
  }
);

router.delete("/delete", regController.deleteUser);

router.get("/get", regController.getUser);

router.put("/update", regController.updateUserInfo);

router.post('/login', loginController.login);

router.post('/testLogin', loginController.testLogin);

module.exports = router;



// router.post("/registration", [
//   check('firstName', "Имя пользователя не может быть пустым").notEmpty(),
//   check('lastName', "Фамилия пользователя не может быть пустой").notEmpty(),
//   check('email', "Email пользователя не может быть пустым").notEmpty(),
//   check('DoB', "Дата рождения пользователя не может быть пустой").notEmpty(),
//   check('password', "Пароль должен быть меньше 8 и больше 20 символов").isLength({ min: 8, max: 20 })
// ],
//   (request, response) => {
//     const errors = validationResult(request);
//     if (!errors.isEmpty()) {
//       return response.status(422).jsonp(errors.array());
//     }
//     regController.registration(request, response)
//   }
// );