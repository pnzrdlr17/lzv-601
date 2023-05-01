const express = require('express');
const lz77Controllers = require('../controllers/lz77-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

//only requests with valid tokens may pass...
router.use(checkAuth);

router.post('/compress', fileUpload.single('file'), lz77Controllers.compress);

router.post(
  '/decompress',
  fileUpload.single('file'),
  lz77Controllers.decompress
);
module.exports = router;
