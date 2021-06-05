var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

// controller untuk register
exports.registrasi = function(req, res) {
    var post = {
        usename: require.body.usename,
        email: require.body.email,
        password: md5(require.body.password),
        role: require.body.role,
        tanggal_daftar: new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??"; // mengcek apakah email sdah terdaftar atau belum
    var table = ["user", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function(error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ??";
                var table = ["user"];
                mysql.format(query, table);
                connection.query(query, post, function(error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil Menambahkan Data User", res);
                    }
                })
            } else {
                response.ok("Email Sudah Terdaftar");
            }
        }
    })
}
