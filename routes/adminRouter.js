const router = require("express").Router()
const {getAllAdmins, createAdmin} = require("../controllers/adminController")

router.route('/').get(getAllAdmins).post(createAdmin)

module.exports = router