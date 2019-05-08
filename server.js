var express = require('express');
var app = express();
var dbConnect = require('./connections/dbConnect.js')
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function (req, res) {
  // ejs render automatically looks in the views folder
  // pods = mainModel.pods;
  // console.log(getPods)
  // res.render('index');
// pods = dbConnect.query('SELECT * from pods')
// console.log(getPods.pods)
  // function getpods() {
    if (typeof pods == 'undefined') {
      dbConnect.query('SELECT * from pods', function (err, rows) {
        if (err) throw err;
        podList = JSON.stringify(rows)
        pages = (rows.length % 50) + 1
        app.set('pods', rows);
        app.set('pageNumbers', pages)
        res.render('index', {
          pods: rows,
          pageNumbers: (rows.length % 50)+1,
          page_name: 'Home'
        })
      })
    } else {
      res.render('index', {
        page_name: 'Home'
      })
    }
  // }
});

app.get('/settings', function (req, res) {
  res.render('settings', {
    title: 'settings',
    page_name: 'Settings'
  })
})


app.listen(port, function () {
  // console.log(getPods.pods)
  console.log('Our app is running on http://localhost:' + port);
  // console.log(process.env.DATABASE_URL);
});