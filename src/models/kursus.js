const db = require('./db');

const Kursus = {
  semuaKursus: (callback) => {
    db.query('SELECT * FROM kursus', callback);
  },
  buat: (data, callback) => {
    db.query('INSERT INTO kursus (judul, deskripsi) VALUES (?, ?)', [data.judul, data.deskripsi], callback);
  },

};

module.exports = Kursus;
