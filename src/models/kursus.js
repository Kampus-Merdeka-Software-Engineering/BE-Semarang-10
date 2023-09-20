const db = require('./db');

const Kursus = {
  semuaKursus: (callback) => {
    db.query('SELECT * FROM kursus', callback);
  },
};

module.exports = Kursus;