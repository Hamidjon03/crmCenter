const Admin = require('../models/adminModels')
const {generatePassword, comparePassword} = require('../helpers/generatePassword');

//@route       Get /admin
//@descr       Get all admins
//@access      Private

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find()
    res.status(200).json({
      message: admins
    })
  } catch (err) {
    res.json({message: err})
  }
}


//@route       Post /admin
//@descr       Post new admin
//@access      Private

const createAdmin = async(req, res) => {
  try {
    const { name, email, surname, phone, role, password } = req.body;
    const userExist = await Admin.findOne({email: email})
    if(userExist){
      return res.status(400).json({
        message: "This user already exist",
        userExist
      })
    }

    const saltPass = await generatePassword(password);
    const admin = await Admin.create({ name, email, surname, phone, role, password: saltPass })
    res.status(200).json({
      message: "User created successfully",
      admin
    })
  } catch (err) {
    res.json({message: err})
  }
}

module.exports = {
  getAllAdmins,
  createAdmin
}