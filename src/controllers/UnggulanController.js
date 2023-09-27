const Unggulan = require('../models/unggulan');

const UnggulanController = {

  tampilkanSemuaUnggulan: (req, res) => {
    Unggulan.semuaUnggulan((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil unggulan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  buatUnggulan: (req, res) => {
    const { judul, keterangan } = req.body;
  
    if (!judul || !keterangan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
  
    const unggulanBaru = { judul, keterangan };
  
    Unggulan.buat(unggulanBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat unggulan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Unggulan berhasil dibuat', unggulan: hasil });
    });
  },
  
  editUnggulan: (req, res) => {
    const idUnggulan = req.params.id;
    const { judul, keterangan } = req.body;

    if (!judul || !keterangan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const unggulanDiedit = { judul, keterangan };

    Unggulan.edit(idUnggulan, unggulanDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit unggulan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Unggulan berhasil diperbarui', unggulan: hasil });
    });
  },

  hapusUnggulan: (req, res) => {
    const idUnggulan = req.params.id;

    Unggulan.hapus(idUnggulan, (err) => {
      if (err) {
        console.error('Error saat menghapus unggulan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Unggulan berhasil dihapus' });
    });
  },

  tampilkanUnggulanByID: (req, res) => {
    const idUnggulan = req.params.id;

    Unggulan.tampilkanByID(idUnggulan, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data unggulan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Unggulan tidak ditemukan' });
      }
    });
  },

};


module.exports = UnggulanController;