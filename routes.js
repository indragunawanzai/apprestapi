// routers tujuannya untuk membuat semacam navigasi

'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
}