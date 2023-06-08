const mongoose = require('mongoose')
const AdminModel = new mongoose.Schema({
  name: { type: String, required: [true, "Foydalanuvchining ismini kiritishingiz kerak"] },
  email: { type: String, unique: true, required: [true, "Foydalanuvchining emailini kiritishingiz kerak"] },
  surname: { type: String, required: [true, "Foydalanuvchining familiyasini kiritishingiz kerak"] },
  phone: { type: String, required: true },
  password: { type: String, required: true, min: 6 },
  role: { type: String, enum: ["Admin", "Teacher", "Direktor", "Manager", "Ishchi"] }
}, {
  timestamps: true
})

module.exports = mongoose.model("Admin", AdminModel)