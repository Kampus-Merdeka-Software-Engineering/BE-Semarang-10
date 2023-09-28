const Pbaru = require('../models/pbaru');

const PbaruController = {

  tampilkanSemuaPbaru: (req, res) => {
    Pbaru.semuaPbaru((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil program baru:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },

  buatPbaru: (req, res) => {
    const { judul, keterangan } = req.body;

    if (!judul || !keterangan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const PbaruBaru = { judul, keterangan };

    Pbaru.buat(PbaruBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat program baru:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Program baru berhasil dibuat', pbaru: hasil });
    });
  },

  editPbaru: (req, res) => {
    const idPbaru = req.params.id;
    const { judul, keterangan } = req.body;

    if (!judul || !keterangan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const pbaruDiedit = { judul, keterangan, status: 'Terkirim dan Teredit' };

    Pbaru.edit(idPbaru, pbaruDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit program baru:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Program baru berhasil diperbarui', pbaru: hasil });
    });
  },

  hapusPbaru: (req, res) => {
    const idPbaru = req.params.id;

    Pbaru.hapus(idPbaru, (err) => {
      if (err) {
        console.error('Error saat menghapus program baru:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Program baru berhasil dihapus' });
    });
  },

  tampilkanPbaruByID: (req, res) => {
    const idPbaru = req.params.id;

    Pbaru.tampilkanByID(idPbaru, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data program baru:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Program baru tidak ditemukan' });
      }
    });
  },

};


module.exports = PbaruController;