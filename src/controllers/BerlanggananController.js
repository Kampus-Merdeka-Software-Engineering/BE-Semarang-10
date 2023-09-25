const Berlangganan = require('../models/berlangganan');

const BerlanggananController = {

  tampilkanSemuaBerlangganan: (req, res) => {
    Berlangganan.semuaBerlangganan((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil berlangganan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  buatBerlangganan: (req, res) => {
    const { email } = req.body;
  
    if (!email ) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
  
    const berlanggananBaru = { email, status: 'Terkirim' };
  
    Berlangganan.buat(berlanggananBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat berlangganan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Berlangganan berhasil dibuat', berlangganan: hasil });
    });
  },
  
  editBerlangganan: (req, res) => {
    const idBerlangganan = req.params.id;
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const berlanggananDiedit = { email, status: 'Terkirim dan Teredit' };

    Berlangganan.edit(idBerlangganan, berlanggananDiedit, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit berlangganan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Berlangganan berhasil diperbarui', berlangganan: hasil });
    });
  },

  hapusBerlangganan: (req, res) => {
    const idBerlangganan = req.params.id;

    Berlangganan.hapus(idBerlangganan, (err) => {
      if (err) {
        console.error('Error saat menghapus berlangganan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Berlangganan berhasil dihapus' });
    });
  },

  tampilkanBerlanggananByID: (req, res) => {
    const idBerlangganan = req.params.id;

    Berlangganan.tampilkanByID(idBerlangganan, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data berlangganan:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Berlangganan tidak ditemukan' });
      }
    });
  },

};


module.exports = BerlanggananController;