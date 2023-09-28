const express = require('express');
const PbaruController = require('../controllers/PbaruController');


const router = express.Router();

router.get('/pbaru', PbaruController.tampilkanSemuaPbaru);
router.post('/pbaru', PbaruController.buatPbaru);
router.put('/pbaru/:id', PbaruController.editPbaru);
router.delete('/pbaru/:id', PbaruController.hapusPbaru);
router.get('/pbaru/:id', PbaruController.tampilkanPbaruByID);

module.exports = router;
