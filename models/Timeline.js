var express   =    require("express");
var mysql     =    require('mysql');
var Const     =    require('./Const');
var Response     =    require('./Response');
var conn = require('./Connection');
var Const = require('./Const');
var Promise = require('bluebird');

var controller = {};
var tableName = "timelines";

controller.read = function (callback) {
	conn.getConnection(function (err, conn) {
      if (err) {
        conn.release();
        callback(Response(err.errno, err.message));
      }

      conn.query('SELECT * FROM ' + tableName, function (err, rows) {
          conn.release();
          if (err)
              callback(Response(err.errno, err.message));
          else
              callback(Response(Const.STATUS_OK,'',rows));
          console.log("Rows : ", rows);
      });
	});
};

controller.create = function (data, callback) {
  conn.getConnection(function (err, conn) {
      if (err) {
        conn.release();
        callback(Response(err.errno, err.message));
      }

      conn.query('INSERT INTO projects(title,description,projectManager,deadline) VALUES(?,?,?,?)', data, function (err, rows) {
          conn.release();
          if (err)
              callback(Response(err.errno, err.message));
          else
              callback(Response(Const.STATUS_OK,'Project is created successfully',rows));
      });
  });
};

controller.update = function (data, callback) {
  conn.getConnection(function (err, conn) {
      if (err) {
        conn.release();
        callback(Response(err.errno, err.message));
      }

      conn.query('UPDATE projects SET title = ?, description = ?, memberCount = ?, deadline = ? WHERE id = ?', data, function (err, rows) {
          conn.release();
          if (err)
              callback(Response(err.errno, err.message));
          else
              callback(Response(Const.STATUS_OK,'Project is updated successfully',rows));
      });
  });
};

controller.delete = function (id, callback) {
  conn.getConnection(function (err, conn) {
      if (err) {
        conn.release();
        callback(Response(err.errno, err.message));
      }

      conn.query('DELETE FROM projects WHERE id = ?', id, function (err, rows) {
          conn.release();
          if (err)
              callback(Response(err.errno, err.message));
          else
              callback(Response(Const.STATUS_OK,'Project is deleted successfully',rows));
      });
  });
};

module.exports = controller;