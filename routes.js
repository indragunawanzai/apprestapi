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
    
    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);
    
    app.route('/ubah')
        .put(jsonku.ubahDataMahasiswa);
    
    app.route('/hapus')
        .delete(jsonku.hapusDataMahasiswa);

    app.route('/tampilgroup')
        .get(jsonku.tampilgroupmatakuliah);
}