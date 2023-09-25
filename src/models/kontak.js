const db = require('./db');

const Kontak = {
  semuaKontak: (callback) => {
    db.query('SELECT * FROM xgrowkontak', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua kontak:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  buat: (data, callback) => {
    if (!data || !data.nama || !data.email || !data.pesan || !data.status) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.error('Error saat membuat kontak:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO xgrowkontak (nama, email, pesan, status) VALUES (?, ?, ?, ?)', [data.nama, data.email, data.pesan, data.status], (err, result) => {
        if (err) {
          console.error('Error saat membuat kontak:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  hapus: (id, callback) => {
    if (!id) {
      const error = new Error('ID kontak diperlukan.');
      console.error('Error saat menghapus kontak:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM xgrowkontak WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus kontak:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.nama && !data.email && !data.pesan && !data.status )) {
      const error = new Error('ID kontak dan data diperlukan.');
      console.error('Error saat mengedit kontak:', error);
      callback(error, null);
    } else {
      db.query('UPDATE xgrowkontak SET nama = ?, email = ?, pesan = ?, status = ? WHERE id = ?', [data.nama, data.email, data.pesan, data.status, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit kontak:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  tampilkanByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID kontak diperlukan.');
      console.error('Error saat menampilkan kontak berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM xgrowkontak WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan kontak berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = Kontak;
