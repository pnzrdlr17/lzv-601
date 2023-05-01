const fs = require('fs').promises;
const LZ77Compressor = require('../util/lz77');
const uuid = require('uuid');
const path = require('path');

const compress = async (req, res, next) => {
  const tool = new LZ77Compressor((window_size = 20));
  const resFilePath = path.join('uploads', 'files', uuid.v1() + '.lz77');
  try {
    await fs.writeFile(resFilePath, '');
  } catch (error) {}
  await tool.compress(req.file.path, resFilePath);
  res.status(200).json({ filePath: resFilePath });
};

const decompress = async (req, res, next) => {
  const tool = new LZ77Compressor((window_size = 20));
  const resFilePath = path.join('uploads', 'files', uuid.v1() + '.txt');
  try {
    await fs.writeFile(resFilePath, '');
  } catch (error) {}
  await tool.decompress(req.file.path, resFilePath);
  res.status(200).json({ filePath: resFilePath });
};

exports.compress = compress;
exports.decompress = decompress;
