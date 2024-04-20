const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.post('/service', verifyToken, serviceController.createService);
router.get('/services', verifyToken, serviceController.getAllServicesByCategory);
router.put('/service/:serviceId', verifyToken, serviceController.updateService);
router.delete('/service/:serviceId', verifyToken, serviceController.deleteService);

module.exports = router;
