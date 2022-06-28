const { Router } = require("express")
const router = new Router()
const models = require('/models/index');


router.post('/registration', [
  check('firstN')
]
(request, response) => {
  
  
  models.User.create({
    email,
    firstName,
    lastName,
    password,
  }).then(function(user) {
    res.json(user);
  });
});