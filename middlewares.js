 
 
 
 function registration(user) {

  const { firstName, lastName, email, 
  password} = user;
 

 

  //============Name=================

  if ( 4 > firstName.length && firstName.length < 20 ) {
    return('The length of the name should be from 4 to 20 characters')
  }

  if (/[^a-zA-Z]/.test(firstName)) {
    return('The name should consist only of letters')
  }

  //============Surname==============

  if ( 4 > lastName.length && lastName.length < 20 ) {
    return('The length of the surname should be from 4 to 20 characters')
  }

  if (/[^a-zA-Z]/.test(lastName)) {
    return('The surname should consist only of letters')
  }
  //============Password==============


  if (8 > password.length && password.length < 20) {
    return('The length of the password should be from 4 to 20 characters')
  }

  if (!checkPassword(password)) {
    return('Wrong password')
  }
  
  function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(str);
  }


  const crypto = require('crypto');


  const heshedPassword = crypto
    .createHmac('sha256', password)
    .update('anyString')
    .digest('hex');


  user.password = heshedPassword;

  //============Mail==================
  function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  if (!validateEmail(email)) {
    return('Wrong email')
  }

 
  return user

}



 function loginCheck (user) {





}
module.exports = {
  registration,
  loginCheck
}