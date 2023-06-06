const bcrypt = require('bcryptjs');

generatePassword = (password) => {
  const newPassword = bcrypt.hash(password, 10);
  return newPassword;
}

comparePassword = async (password, basePassword) => {
  const comparePass = await bcrypt.compare(password, basePassword)
  return comparePass
}


module.exports = {
  generatePassword,
  comparePassword
}