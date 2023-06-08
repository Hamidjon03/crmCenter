const mongoose = require('mongoose')
const connectStr = "mongodb://localhost:27017";

const connectDB = (connectStr) => {
  return mongoose.connect(connectStr, {useNewParsel: true}).then(() => console.log("Meow"))
}

module.exports = connectDB