const express = require('express');
const DatahomeController = require('../controllers/DatahomeController');


const router = express.Router();

router.get('/datahome', DatahomeController.tampilkanSemuaDatahome);
router.post('/datahome', DatahomeController.buatDatahome);
router.put('/datahome/:id', DatahomeController.editDatahome);
router.delete('/datahome/:id', DatahomeController.hapusDatahome);
router.get('/datahome/:id', DatahomeController.tampilkanDatahomeByID);

module.exports = router;
