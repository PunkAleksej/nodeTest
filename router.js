const Router = require('express');
const router = new Router();
const regController = require('./controllers/regController');
const loginController = require('./controllers/loginController');
const {validationResult, check} = require("express-validator/check")


router.post("/registration",[
  check('firstName', "Имя пользователя не может быть пустым").notEmpty(),
  check('lastName', "Фамилия пользователя не может быть пустой").notEmpty(),
  check('email', "Email пользователя не может быть пустым").notEmpty(),
  check('DoB', "Дата рождения пользователя не может быть пустой").notEmpty(),
  check('password', "Пароль должен быть меньше 8 и больше 20 символов").isLength({min:8, max:20})], 
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).jsonp(errors.array());
    }
  regController.registration(request, response)
  }
);
  


router.delete("/registration", regController.deleteUser);

router.get("/registration",regController.getUser);

router.put("/registration", regController.updateUserInfo);

router.post('/login', loginController.login);

module.exports = router;