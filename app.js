const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hi! from IBM Cloud Paks!");
});
 
module.exports.app = app;
