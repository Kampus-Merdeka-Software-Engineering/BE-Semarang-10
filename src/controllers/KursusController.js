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
  

  buatKursus: (req, res) => {
    const { judul, deskripsi } = req.body;

    if (!judul || !deskripsi) {
      res.status(400).json({ error: 'Judul dan deskripsi diperlukan' });
      return;
    }

    const kursusBaru = { judul, deskripsi };

    Kursus.buat(kursusBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat kursus:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Kursus berhasil dibuat', kursus: hasil });
    });
  },

  
  editKursus: (req, res) => {
    const idKursus = req.params.id;
    const { judul, deskripsi } = req.body;

    if (!judul || !deskripsi) {
      res.status(400).json({ error: 'Judul dan deskripsi diperlukan' });
      return;
    }

    const kursusDiedit = { judul, deskripsi };

    Kursus.edit(idKursus, kursusDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit kursus:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Kursus berhasil diperbarui', kursus: hasil });
    });
  },

  hapusKursus: (req, res) => {
    const idKursus = req.params.id;

    Kursus.hapus(idKursus, (err) => {
      if (err) {
        console.error('Error saat menghapus kursus:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Kursus berhasil dihapus' });
    });
  },

  tampilkanKursusByID: (req, res) => {
    const idKursus = req.params.id;

    Kursus.tampilkanByID(idKursus, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data kursus:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Kursus tidak ditemukan' });
      }
    });
  },

};


module.exports = KursusController;