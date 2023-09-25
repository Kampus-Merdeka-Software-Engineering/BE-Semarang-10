const db = require('./db');

const Infoberita = {
  semuaInfoberita: (callback) => {
    db.query('SELECT * FROM xgrowinfoberita', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua data info berita:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  buat: (data, callback) => {
    if (!data || !data.berita || !data.tanggal || !data.status) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.error('Error saat membuat info berita:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO xgrowinfoberita (berita, tanggal, status) VALUES (?, ?, ? )', [data.berita, data.tanggal, data.status], (err, result) => {
        if (err) {
          console.error('Error saat membuat info berita:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  hapus: (id, callback) => {
    if (!id) {
      const error = new Error('ID info berita diperlukan.');
      console.error('Error saat menghapus info berita:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM xgrowinfoberita WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus info berita:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.berita && !data.tanggal && !data.status )) {
      const error = new Error('ID info berita dan data diperlukan.');
      console.error('Error saat mengedit info berita:', error);
      callback(error, null);
    } else {
      db.query('UPDATE xgrowinfoberita SET berita = ?, tanggal = ?, status = ? WHERE id = ?', [data.berita, data.tanggal, data.status, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit info berita:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  tampilkanByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID info berita diperlukan.');
      console.error('Error saat menampilkan info berita berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM xgrowinfoberita WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan infoberita berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = Infoberita;
