const { validationResult } = require("express-validator/check")

const registrationSchema = {
  password: {
      isStrongPassword: {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1
      },
      errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
  },
  email: {
      normalizeEmail: true,
      custom: {
        options: value => {
            return User.find({
                email: value
            }).then(user => {
                if (user.length > 0) {
                    return Promise.reject('Username already in use')
                }
            })
        }
    }
  }
}





const validate = validations => {
  return async (request, response, next) => {
      await Promise.all(validations.map(validation => validation.run(request)));

      const errors = validationResult(request);
      if (errors.isEmpty()) {
          return next();
      }

      response.status(400).json({
          errors: errors.array()
      });
  };
}

module.exports = {registrationSchema, validate};