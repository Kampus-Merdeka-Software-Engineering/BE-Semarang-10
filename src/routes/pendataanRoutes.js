const express = require('express');
const PendataanController = require('../controllers/PendataanController');


const router = express.Router();

router.get('/pendataan', PendataanController.tampilkanSemuaPendataan);
router.post('/pendataan', PendataanController.buatPendataan);
router.put('/pendataan/:id', PendataanController.editPendataan);
router.delete('/pendataan/:id', PendataanController.hapusPendataan);
router.get('/pendataan/:id', PendataanController.tampilkanPendataanByID);
router.get('/pendataan/kodependataan/:id', PendataanController.tampilkanPendataanByKode);
module.exports = router;
