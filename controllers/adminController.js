const Admin = require('../models/adminModels');
const {generatePassword, comparePassword} = require('../helpers/generatePassword');

//@route       Get /admin
//@descr       Get all admins
//@access      Private

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find()
    res.status(200).json({
      message: "All admins"
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
    
  } catch (err) {
    res.json({message: err})
  }
}