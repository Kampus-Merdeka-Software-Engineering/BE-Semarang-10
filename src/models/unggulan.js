const db = require('./db');

const Unggulan = {
  semuaUnggulan: (callback) => {
    db.query('SELECT * FROM xgrowunggulan', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua data unggulan:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },


  buat: (data, callback) => {
    if (!data || !data.judul || !data.keterangan || !data.gambar) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.error('Error saat membuat unggulan:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO xgrowunggulan (judul, keterangan, gambar) VALUES (?, ?, ? )', [data.judul, data.keterangan, data.gambar], (err, result) => {
        if (err) {
          console.error('Error saat membuat unggulan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  hapus: (id, callback) => {
    if (!id) {
      const error = new Error('ID unggulan diperlukan.');
      console.error('Error saat menghapus unggulan:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM xgrowunggulan WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus unggulan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.judul && !data.keterangan && !data.gambar)) {
      const error = new Error('ID unggulan dan data diperlukan.');
      console.error('Error saat mengedit unggulan:', error);
      callback(error, null);
    } else {
      db.query('UPDATE xgrowunggulan SET judul = ?, keterangan = ?, gambar = ? WHERE id = ?', [data.judul, data.keterangan, data.gambar, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit unggulan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  tampilkanByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID unggulan diperlukan.');
      console.error('Error saat menampilkan unggulan berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM xgrowunggulan WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan unggulan berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = Unggulan;
