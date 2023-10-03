const Pendataan = require('../models/pendataan');

const PendataanController = {

  tampilkanSemuaPendataan: (req, res) => {
    Pendataan.semuaPendataan((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil pendataan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  buatPendataan: (req, res) => {
    const { kodependataan, judul, keterangan, nama, email, pesan, status, tanggalpendataan } = req.body;
    if (!kodependataan || !judul || !keterangan || !nama || !email || !pesan || !status || !tanggalpendataan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
    const pendataanBaru = { kodependataan, judul, keterangan, nama, email, pesan, status, tanggalpendataan  };
    Pendataan.buat(pendataanBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat pendataan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Pendataan berhasil dibuat', pendataan: hasil });
    });
  },
  
  editPendataan: (req, res) => {
    const idPendataan = req.params.id;
    const { kodependataan, judul, keterangan, nama, email, pesan, status, tanggalpendataan } = req.body;

    if (!kodependataan || !judul || !keterangan || !nama || !email || !pesan || !status || !tanggalpendataan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
    const pendataanDiedit = { kodependataan, judul, keterangan, nama, email, pesan, status, tanggalpendataan };
    Pendataan.edit(idPendataan, pendataanDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit pendataan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Pendataan berhasil diperbarui', pendataan: hasil });
    });
  },

  hapusPendataan: (req, res) => {
    const idPendataan = req.params.id;

    Pendataan.hapus(idPendataan, (err) => {
      if (err) {
        console.error('Error saat menghapus pendataan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Pendataan berhasil dihapus' });
    });
  },

  tampilkanPendataanByID: (req, res) => {
    const idPendataan = req.params.id;

    Pendataan.tampilkanByID(idPendataan, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data pendataan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Pendataan tidak ditemukan' });
      }
    });
  },

  tampilkanPendataanByKode: (req, res) => {
    const kodependataan = req.params.id;
    Pendataan.tampilkanPendataanByKode(kodependataan, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data pendataan berdasarkan kodependataan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      if (hasil.length > 0) {
        res.status(200).json(hasil[0]);
      } else {
        res.status(404).json({ error: 'Pendataan tidak ditemukan' });
      }
    });
  },

};

module.exports = PendataanController;