var mysql     = require('mysql');
var Const     = require('./Const');
var Response  = require('./Response');
var db = require('../config/database.js');

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : db.host,
    user     : db.user,
    password : db.password,
    database : db.database,
    debug    : false,
});

module.exports = pool;


// dbConnection.read = function (pool,query,callback) {
//     pool.getConnection(function(err,connection){
//         var resp;

//         if (err) {
//           connection.release();
//           resp = Response(err.errno, err.message);
//           return resp;
//         }

//         console.log('read connected as id ' + connection.threadId);

//         connection.query(query,function(err,rows){
//             connection.release();
//             if(!err){
//               resp = Response(Const.STATUS_OK,'',rows);
//               // console.log("Database response : ", resp);
//               callback(resp);
//             }
//             else{
//               console.log(err);
//             }           
//         });

//         connection.on('error', function(err) {
//               resp = Response(err.errno, err.message);
//               return resp;
//         });
//   });
// }

// dbConnection.readOne = function (pool,query,data,callback) {
//     pool.getConnection(function(err,connection){
//         var resp;

//         if (err) {
//           connection.release();
//           resp = Response(err.errno, err.message);

//           return resp;
//         }

//         console.log('readOne connected as id ' + connection.threadId);

//         connection.query(query,data,function(err,rows){
//             connection.release();
//             if(!err){
//               resp = Response(Const.STATUS_OK,'',rows);
//               // console.log("Database response : ", resp);
//               callback(resp);
//             }
//             else{
//               console.log(err);
//             }
//         });

//         connection.on('error', function(err) {
//               resp = Response(err.errno, err.message);
//               return resp;
//         });
//   });
// }

// dbConnection.insertUpdateDelete = function (pool,query,data,callback) {
//     pool.getConnection(function(err,connection){
//         var resp;

//         if (err) {
//           connection.release();
//           resp = Response(err.errno, err.message);
//           return resp;
//         }

//         console.log('Insert connected as id ' + connection.threadId);

//         connection.query(query,data,function(err,rows){
//             connection.release();
//             if(!err){
//               resp = Response(Const.STATUS_OK,'Operation Successful',rows);
//               console.log(resp);
//               callback(resp);
//             }else{
//               resp = Response(Const.STATUS_ALREADY_EXISTED,'Operation Failed','');
//               console.log(err);
//               callback(resp);
//             }
//         });

//         connection.on('error', function(err) {
//           resp = Response(err.errno, err.message);
//           return resp;
//         });
//   });
// }
