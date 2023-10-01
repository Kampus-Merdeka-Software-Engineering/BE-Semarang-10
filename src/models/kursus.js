const db = require('./db');

const Kursus = {
  semuaKursus: (callback) => {
    db.query('SELECT * FROM kursus', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua kursus:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
  buat: (data, callback) => {
    if (!data || !data.judul || !data.deskripsi) {
      const error = new Error('Data judul dan deskripsi kursus diperlukan.');
      console.error('Error saat membuat kursus:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO kursus (judul, deskripsi) VALUES (?, ?)', [data.judul, data.deskripsi], (err, result) => {
        if (err) {
          console.error('Error saat membuat kursus:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },
  hapus: (id, callback) => {
    if (!id) {
      const error = new Error('ID kursus diperlukan.');
      console.error('Error saat menghapus kursus:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM kursus WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus kursus:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },
  edit: (id, data, callback) => {
    if (!id || !data || (!data.judul && !data.deskripsi)) {
      const error = new Error('ID kursus dan data judul atau deskripsi diperlukan.');
      console.error('Error saat mengedit kursus:', error);
      callback(error, null);
    } else {
      db.query('UPDATE kursus SET judul = ?, deskripsi = ? WHERE id = ?', [data.judul, data.deskripsi, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit kursus:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },
  tampilkanByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID kursus diperlukan.');
      console.error('Error saat menampilkan kursus berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM kursus WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan kursus berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },
};


module.exports = Kursus;
