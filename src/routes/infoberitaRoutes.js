const express = require('express');
const InfoberitaController = require('../controllers/InfoberitaController');


const router = express.Router();

router.get('/infoberita', InfoberitaController.tampilkanSemuaInfoberita);
router.post('/infoberita', InfoberitaController.buatInfoberita);
router.put('/infoberita/:id', InfoberitaController.editInfoberita);
router.delete('/infoberita/:id', InfoberitaController.hapusInfoberita);
router.get('/infoberita/:id', InfoberitaController.tampilkanInfoberitaByID);

module.exports = router;
