const multer = require('multer');
const uuid = require('uuid');
const path = require('path');

const MIME_TYPE_MAP = {
  'text/plain': 'txt',
  'application/octet-stream': 'lz',
  // 'image/jpeg': 'jpeg',
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/files');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).split('.')[1];
      cb(null, uuid.v1() + '.' + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid
      ? null
      : new Error(`Invalid mime type!${file.mimetype}`);
    cb(error, isValid);
  },
});

module.exports = fileUpload;
