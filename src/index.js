const express = require("express")
const pug = require('pug');
const app = express();

app.set('views', './templates')
app.set('view engine', 'pug')
app.get("/",function (req, res) {
  res.render('tst1', { title: 'Hey', message: 'Hello there!', name:'projectZero'});
})
app.listen(80, function () {
  console.log('App listening on port 80!');
});
