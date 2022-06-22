import colors from "colors"
export function requestTime(req, res, next) {
  req.requestTime = Date.now()


  next()
}

export function logger(req, res, next) {
  const loginButton = document.querySelector(".loginButton");
  loginButton.addEventListener("click", function (event) {
    loginCheck()
  })
  next()
}

export function registration(user) {
  
}


export function loginCheck (user) {

  console.log(user)



}