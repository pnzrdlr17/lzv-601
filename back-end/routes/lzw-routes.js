const express = require('express');
const lzwControllers = require('../controllers/lzw-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

//only requests with valid tokens may pass...
router.use(checkAuth);

router.post('/compress', fileUpload.single('file'), lzwControllers.compress);

router.post(
  '/decompress',
  fileUpload.single('file'),
  lzwControllers.decompress
);
module.exports = router;
