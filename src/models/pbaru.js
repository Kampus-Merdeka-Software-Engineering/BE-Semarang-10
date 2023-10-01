const db = require('./db');

const Pbaru = {
  semuaPbaru: (callback) => {
    db.query('SELECT * FROM xgrowpbaru', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua data program baru:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  buat: (data, callback) => {
    if (!data || !data.judul || !data.keterangan || !data.gambar) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.error('Error saat membuat program baru:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO xgrowpbaru (judul, keterangan, gambar) VALUES (?, ?, ?)', [data.judul, data.keterangan, data.gambar], (err, result) => {
        if (err) {
          console.error('Error saat membuat program baru:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  hapus: (id, callback) => {
    if (!id) {
      const error = new Error('ID program baru diperlukan.');
      console.error('Error saat menghapus program baru:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM xgrowpbaru WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus program baru:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.judul && !data.keterangan && !data.gambar)) {
      const error = new Error('ID program baru dan data diperlukan.');
      console.error('Error saat mengedit program baru:', error);
      callback(error, null);
    } else {
      db.query('UPDATE xgrowpbaru SET judul = ?, keterangan = ?, gambar = ?, WHERE id = ?', [data.judul, data.keterangan, data.gambar, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit program baru:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  tampilkanByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID program baru diperlukan.');
      console.error('Error saat menampilkan program baru berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM xgrowpbaru WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan Baru berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = Pbaru;
