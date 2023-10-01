const express = require('express');
const BerlanggananController = require('../controllers/BerlanggananController');


const router = express.Router();

router.get('/berlangganan', BerlanggananController.tampilkanSemuaBerlangganan);
router.post('/berlangganan', BerlanggananController.buatBerlangganan);
router.put('/berlangganan/:id', BerlanggananController.editBerlangganan);
router.delete('/berlangganan/:id', BerlanggananController.hapusBerlangganan);
router.get('/berlangganan/:id', BerlanggananController.tampilkanBerlanggananByID);

module.exports = router;
