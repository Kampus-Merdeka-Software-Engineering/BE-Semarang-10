const express = require('express');
const UnggulanController = require('../controllers/UnggulanController');


const router = express.Router();

router.get('/unggulan', UnggulanController.tampilkanSemuaUnggulan);
router.post('/unggulan', UnggulanController.buatUnggulan);
router.put('/unggulan/:id', UnggulanController.editUnggulan);
router.delete('/unggulan/:id', UnggulanController.hapusUnggulan);
router.get('/unggulan/:id', UnggulanController.tampilkanUnggulanByID);

module.exports = router;
