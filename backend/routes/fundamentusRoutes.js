const express = require('express');
const router = express.Router();
const fundamentusController = require('../controllers/fundamentusController');
const auth = require('../middlewares/auth');

router.get('/all/:ticker', auth, fundamentusController.getAll);
router.get('/dy/:ticker', fundamentusController.getDY);
router.get('/pvp/:ticker', fundamentusController.getPVP);
router.get('/nome/:ticker', fundamentusController.getNome);
router.get('/cotacao/:ticker', fundamentusController.getCotacao);
router.get('/help', fundamentusController.getHelp);

module.exports = router;