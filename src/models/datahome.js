const db = require('./db');

const Datahome = {
  semuaDatahome: (callback) => {
    db.query('SELECT * FROM xgrowdatahome', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua data info berita:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  buat: (data, callback) => {
    if (!data || !data.pengguna || !data.mentor || !data.alumni  || !data.keberhasilan) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.error('Error saat membuat info berita:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO xgrowdatahome (pengguna, mentor, alumni, keberhasilan) VALUES (?, ?, ?, ? )', [data.pengguna, data.mentor, data.alumni, data.keberhasilan], (err, result) => {
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
      const error = new Error('ID Data Home diperlukan.');
      console.error('Error saat menghapus data home:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM xgrowdatahome WHERE id = ?', [id], (err, result) => {
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
    if (!id || !data || (!data.pengguna && !data.mentor && !data.alumni && !data.keberhasilan )) {
      const error = new Error('ID data home dan data diperlukan.');
      console.error('Error saat mengedit data home:', error);
      callback(error, null);
    } else {
      db.query('UPDATE xgrowdatahome SET pengguna = ?, mentor = ?, alumni = ?, keberhasilan = ? WHERE id = ?', [data.pengguna, data.mentor, data.alumni, data.keberhasilan, id], (err, result) => {
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
      db.query('SELECT * FROM xgrowdatahome WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan datahome berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = Datahome;
