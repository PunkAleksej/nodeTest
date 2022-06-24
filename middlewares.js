export function registration(user) {
  //console.log(user)
  const { regName, regSurname, regMail, 
  regPassword, regRepPassword } = user;

 

  //============Name=================

  if ( 4 > regName.length && regName.length < 20 ) {
    return('The length of the name should be from 4 to 20 characters')
  }

  if (/[^a-zA-Z]/.test(regName)) {
    return('The name should consist only of letters')
  }

  //============Surname==============

  if ( 4 > regSurname.length && regSurname.length < 20 ) {
    return('The length of the surname should be from 4 to 20 characters')
  }

  if (/[^a-zA-Z]/.test(regSurname)) {
    return('The surname should consist only of letters')
  }
  //============Password==============


  if (regPassword !== regRepPassword) {
    return('Passwords dont match')

  }


  if (8 > regPassword.length && regPassword.length < 20) {
    return('The length of the password should be from 4 to 20 characters')
  }

  if (!checkPassword(regPassword)) {
    return('Wrong password')
  }
  
  function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(str);
  }


  //============Mail==================
  function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  if (!validateEmail(regMail)) {
    return('Wrong email')
  }

  return user

}

// {
//   regName: 'Alex',
//   regSurname: 'Dudnikov',
//   regMail: 'alekdudnikov@mail.ru',
//   regPassword: '89185209977',
//   regRepPassword: '89185209977'
// }




export function loginCheck (user) {

  console.log(user)



}