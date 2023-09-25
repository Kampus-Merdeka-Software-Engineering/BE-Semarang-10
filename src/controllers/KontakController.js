const Kontak = require('../models/kontak');

const KontakController = {

  tampilkanSemuaKontak: (req, res) => {
    Kontak.semuaKontak((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  

  buatKontak: (req, res) => {
    const { nama, email, pesan } = req.body;
  
    if (!nama || !email || !pesan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
  
    const kontakBaru = { nama, email, pesan, status: 'Terkirim' };
  
    Kontak.buat(kontakBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Kontak berhasil dibuat', kontak: hasil });
    });
  },
  
  editKontak: (req, res) => {
    const idKontak = req.params.id;
    const { nama, email, pesan } = req.body;

    if (!nama || !email || !pesan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const kontakDiedit = { nama, email, pesan, status: 'Terkirim dan Teredit' };

    Kontak.edit(idKontak, kontakDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Kontak berhasil diperbarui', kontak: hasil });
    });
  },

  hapusKontak: (req, res) => {
    const idKontak = req.params.id;

    Kontak.hapus(idKontak, (err) => {
      if (err) {
        console.error('Error saat menghapus kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Kontak berhasil dihapus' });
    });
  },

  tampilkanKontakByID: (req, res) => {
    const idKontak = req.params.id;

    Kontak.tampilkanByID(idKontak, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Kontak tidak ditemukan' });
      }
    });
  },

};


module.exports = KontakController;