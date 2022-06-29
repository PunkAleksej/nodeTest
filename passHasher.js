const crypto = require('crypto');


function hasher(password) {
  return crypto
  .createHmac('sha256', password)
  .update('anyString')
  .digest('hex');
}


module.exports = hasher;