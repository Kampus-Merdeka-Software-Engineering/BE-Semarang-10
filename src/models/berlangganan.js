const db = require('./db');

const Berlangganan = {
  semuaBerlangganan: (callback) => {
    db.query('SELECT * FROM xgrowberlangganan', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua berlangganan:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  buat: (data, callback) => {
    if (!data || !data.email || !data.status) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.error('Error saat membuat berlangganan:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO xgrowberlangganan (email, status) VALUES (?, ?)', [data.email, data.status], (err, result) => {
        if (err) {
          console.error('Error saat membuat berlangganan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  hapus: (id, callback) => {
    if (!id) {
      const error = new Error('ID berlangganan diperlukan.');
      console.error('Error saat menghapus berlangganan:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM xgrowberlangganan WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus berlangganan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.email && !data.status )) {
      const error = new Error('ID berlangganan dan data diperlukan.');
      console.error('Error saat mengedit berlangganan:', error);
      callback(error, null);
    } else {
      db.query('UPDATE xgrowberlangganan SET email = ?, status = ? WHERE id = ?', [data.email, data.status, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit berlangganan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  tampilkanByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID berlangganan diperlukan.');
      console.error('Error saat menampilkan berlangganan berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM xgrowberlangganan WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan berlangganan berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = Berlangganan;
