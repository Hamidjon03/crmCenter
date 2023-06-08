const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require("mongoose");

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/admin', require("./routes/adminRouter"))


mongoose.connect('mongodb://localhost:27017/crmCenter',
  {
    useNewUrlParser: true
  }
);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});