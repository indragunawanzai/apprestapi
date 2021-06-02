// routers tujuannya untuk membuat semacam navigasi

'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);
    
    app.route('/tampil/:id')
        .get(jsonku.tampilDataById);
}