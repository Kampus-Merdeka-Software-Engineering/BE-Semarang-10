const express = require('express');
const KontakController = require('../controllers/KontakController');


const router = express.Router();

router.get('/kontak', KontakController.tampilkanSemuaKontak);
router.post('/kontak', KontakController.buatKontak);
router.put('/kontak/:id', KontakController.editKontak);
router.delete('/kontak/:id', KontakController.hapusKontak);
router.get('/kontak/:id', KontakController.tampilkanKontakByID);

module.exports = router;
