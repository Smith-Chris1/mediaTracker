// var dbConnect = require('../connections/dbConnect.js')
var mysql_query = require('../connections/dbConnect.js');
"use strict";
/*
 * @pods
 * gets pods.
 */
var _pods = mysql_query('SELECT * from pods', "", function(err, rows)   {
    // exports.podList = JSON.stringify(rows);
    // console.log(pods)
    // var _pages = (rows.length % 50) + 1
    return JSON.stringify(rows)
    // console.log(JSON.stringify(rows))
});

// var _pages = function() {
//   return _getName();
// };
// console.log(rows)

module.exports = {
  pods : _pods
  // pages : _pages
};
// mysql_query('SELECT * from your_table where ?', {id: '1'}, function(err, rows)   {
//     console.log(rows);
// });
// function getPods() {
// dbConnect.query('SELECT * from pods', function (err, rows) {
//         if (err) throw err;
//         var podList = JSON.stringify(rows)
//         var pages = (rows.length % 50) + 1
        // app.set('pods', rows);
        // app.set('pageNumbers', pages)
        // res.render('index', {
        //   pods: rows,
        //   pageNumbers: pages,
        //   page_name: 'Home'
        // })
        // exports.pods = dbConnect.query('SELECT * from pods', function(err, result) {
        //   if (err) throw err;
        // });  
        // , function (rows) { 
          // if (err) throw err; 
          // return rows
          // console.log('testing')
          // JSON.stringify(rows)
          // })
        // exports.podList = JSON.stringify(rows);
      // module.exports = pages;
      // })
          // }
      // exports.addcustomer()
      
    // }