const db = require('./db');

const Pendataan = {
  semuaPendataan: (callback) => {
    db.query('SELECT * FROM xgrowpendataan', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua pendataan:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
  
  buat: (data, callback) => {
    if (!data ||  !data.kodependataan || !data.judul || !data.keterangan || !data.nama || !data.email || !data.pesan || !data.status || !data.tanggalpendataan) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.error('Error saat membuat pendataan:', error);
      callback(error, null);
    } else {        
      db.query('INSERT INTO xgrowpendataan (kodependataan, judul, keterangan, nama, email, pesan, status, tanggalpendataan ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [data.kodependataan, data.judul, data.keterangan, data.nama, data.email, data.pesan, data.status, data.tanggalpendataan], (err, result) => {
        if (err) {
          console.error('Error saat membuat pendataan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  hapus: (id, callback) => {
    if (!id) {
      const error = new Error('ID pendataan diperlukan.');
      console.error('Error saat menghapus pendataan:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM xgrowpendataan WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus pendataan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },
  edit: (id, data, callback) => {
    if (!id || !data || (!data.kodependataan && !data.judul && !data.keterangan && !data.nama && !data.email  && !data.pesan  && !data.status  && !data.tanggalpendataan )) {
      const error = new Error('ID pendataan dan data diperlukan.');
      console.error('Error saat mengedit pendataan:', error);
      callback(error, null);
    } else {
      db.query('UPDATE xgrowpendataan SET kodependataan = ?, judul = ?, keterangan = ?, nama = ?, email = ?, pesan = ?, status = ?, tanggalpendataan = ? WHERE id = ?', [data.kodependataan, data.judul, data.keterangan, data.nama, data.email, data.pesan, data.status, data.tanggalpendataan, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit pendataan:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  tampilkanByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID pendataan diperlukan.');
      console.error('Error saat menampilkan pendataan berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM xgrowpendataan WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan pendataan berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },
};

module.exports = Pendataan;
