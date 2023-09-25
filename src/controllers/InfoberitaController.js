const Infoberita = require('../models/infoberita');

const InfoberitaController = {

  tampilkanSemuaInfoberita: (req, res) => {
    Infoberita.semuaInfoberita((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  buatInfoberita: (req, res) => {
    const { berita, tanggal } = req.body;
  
    if (!berita || !tanggal ) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
  
    const infoberitaBaru = { berita, tanggal, status: 'Di setujui' };
  
    Infoberita.buat(infoberitaBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Info berita berhasil dibuat', infoberita: hasil });
    });
  },
  
  editInfoberita: (req, res) => {
    const idInfoberita = req.params.id;
    const { berita, tanggal } = req.body;

    if (!berita || !tanggal) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const infoberitaDiedit = { berita, tanggal, status: 'Terkirim dan Teredit' };

    Infoberita.edit(idInfoberita, infoberitaDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Info berita berhasil diperbarui', infoberita: hasil });
    });
  },

  hapusInfoberita: (req, res) => {
    const idInfoberita = req.params.id;

    Infoberita.hapus(idInfoberita, (err) => {
      if (err) {
        console.error('Error saat menghapus info berita:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Info berita berhasil dihapus' });
    });
  },

  tampilkanInfoberitaByID: (req, res) => {
    const idInfoberita = req.params.id;

    Infoberita.tampilkanByID(idInfoberita, (err, hasil) => {
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


module.exports = InfoberitaController;