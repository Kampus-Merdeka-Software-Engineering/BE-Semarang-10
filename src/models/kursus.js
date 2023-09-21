const db = require('./db');

const Kursus = {
  semuaKursus: (callback) => {
    db.query('SELECT * FROM kursus', callback);
  },
  buat: (data, callback) => {
    db.query('INSERT INTO kursus (judul, deskripsi) VALUES (?, ?)', [data.judul, data.deskripsi], callback);
  },
  hapus: (data, callback) => {
    db.query('DELETE FROM kursus WHERE id = ?', [data.id], callback);
  },
  
};

module.exports = Kursus;
