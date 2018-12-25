const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const db = require("./dbConnect")
const Users = require("./models/user")
const app = express()
const port = 4000

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())


app.post("/users/add", function (req, res, next) {
  var user = new Users();
  user.name = req.body.name;
  user.email = req.body.email;

  user.save(function (err) {
    if (err) {
      throw err
    } else {
      res.send("Data sent to Database")
    }
  })
})



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))