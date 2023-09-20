const express = require('express');
const KursusController = require('../controllers/KursusController');

const router = express.Router();

router.get('/kursus', KursusController.tampilkanSemuaKursus);

module.exports = router;
