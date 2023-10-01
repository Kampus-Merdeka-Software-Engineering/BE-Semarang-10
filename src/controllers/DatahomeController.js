const Datahome = require('../models/datahome');

const DatahomeController = {

  tampilkanSemuaDatahome: (req, res) => {
    Datahome.semuaDatahome((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  buatDatahome: (req, res) => {
    const { pengguna, mentor, alumni, keberhasilan  } = req.body;
    if (!pengguna || !mentor || !alumni || !keberhasilan ) {
      res.status(400).json({ error: 'Form isi ini diperlukan' });
      return;
    }
    const datahomeBaru = { pengguna, mentor, alumni, keberhasilan };
  
    Datahome.buat(datahomeBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Info berita berhasil dibuat', datahome: hasil });
    });
  },

  editDatahome: (req, res) => {
    const idDatahome = req.params.id;
    const { pengguna, mentor, alumni, keberhasilan } = req.body;

    if (!pengguna || !mentor || !alumni || !keberhasilan) {
      res.status(400).json({ error: 'Form isi ini diperlukan' });
      return;
    }

    const datahomeDiedit = {  pengguna, mentor, alumni, keberhasilan  };

    Datahome.edit(idDatahome, datahomeDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Info berita berhasil diperbarui', datahome: hasil });
    });
  },

  hapusDatahome: (req, res) => {
    const idDatahome = req.params.id;

    Datahome.hapus(idDatahome, (err) => {
      if (err) {
        console.error('Error saat menghapus info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Info berita berhasil dihapus' });
    });
  },

  tampilkanDatahomeByID: (req, res) => {
    const idDatahome = req.params.id;

    Datahome.tampilkanByID(idDatahome, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Info berita tidak ditemukan' });
      }
    });
  },

};

module.exports = DatahomeController;