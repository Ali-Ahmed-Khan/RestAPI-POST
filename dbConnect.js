const mongoose = require("mongoose");

module.exports = mongoose.connect("mongodb://localhost:27017/restapi", {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
  else console.log("DB connected")
})