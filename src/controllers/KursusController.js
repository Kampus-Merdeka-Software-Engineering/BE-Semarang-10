const Kursus = require('../models/kursus');

const KursusController = {
  tampilkanSemuaKursus: (req, res) => {
    Kursus.semuaKursus((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil kursus:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
};

module.exports = KursusController;