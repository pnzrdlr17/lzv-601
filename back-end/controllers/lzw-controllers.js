const fs = require('fs').promises;
const LZWCompressor = require('../util/lzw');
const uuid = require('uuid');
const path = require('path');

const compress = async (req, res, next) => {
  const tool = new LZWCompressor();
  const resFilePath = path.join('uploads', 'files', uuid.v1() + '.lzw');
  try {
    await fs.writeFile(resFilePath, '');
  } catch (error) {}
  await tool.compress(req.file.path, resFilePath);
  res.status(200).json({ filePath: resFilePath });
};

const decompress = async (req, res, next) => {
  const tool = new LZWCompressor();
  const resFilePath = path.join('uploads', 'files', uuid.v1() + '.txt');
  try {
    await fs.writeFile(resFilePath, '');
  } catch (error) {}
  await tool.decompress(req.file.path, resFilePath);
  res.status(200).json({ filePath: resFilePath });
};

exports.compress = compress;
exports.decompress = decompress;
