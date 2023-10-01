const express = require('express');
const KursusController = require('../controllers/KursusController');


const router = express.Router();

router.get('/kursus', KursusController.tampilkanSemuaKursus);
router.post('/kursus', KursusController.buatKursus);
router.put('/kursus/:id', KursusController.editKursus);
router.delete('/kursus/:id', KursusController.hapusKursus);
router.get('/kursus/:id', KursusController.tampilkanKursusByID);

module.exports = router;
