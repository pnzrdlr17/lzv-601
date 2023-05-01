const fs = require('fs').promises;
class LZ77Compressor {
  static MAX_WINDOW_SIZE = 400;

  constructor(window_size = 20) {
    this.window_size = Math.min(window_size, LZ77Compressor.MAX_WINDOW_SIZE);
    this.lookahead_buffer_size = 15; // length of match is at most 4 bits
  }

  async compressX(input_text) {
    let data = Buffer.from(input_text);
    let i = 0;
    const visArr = [];
    while (i < data.length) {
      const match = this.findLongestMatch(data, i);
      if (match) {
        const [bestMatchDistance, bestMatchLength] = match;
        visArr.push({
          type: 1,
          dist: bestMatchDistance,
          len: bestMatchLength,
        });
        i += bestMatchLength;
      } else {
        visArr.push({
          type: 0,
          data: data[i],
        });
        i += 1;
      }
    }
    return visArr;
  }

  async compress(input_file_path, output_file_path = null) {
    let data;
    let i = 0;
    const output_buffer = [];
    try {
      data = await fs.readFile(input_file_path);
    } catch (error) {
      console.error('Could not open input file ...');
      throw error;
    }
    while (i < data.length) {
      const match = this.findLongestMatch(data, i);
      if (match) {
        const [bestMatchDistance, bestMatchLength] = match;

        output_buffer.push(true);
        output_buffer.push((bestMatchDistance >> 4) & 0xff);
        output_buffer.push(((bestMatchDistance & 0xf) << 4) | bestMatchLength);

        i += bestMatchLength;
      } else {
        output_buffer.push(false);
        output_buffer.push(data[i]);

        i += 1;
      }
    }

    const compressedData = Buffer.from(output_buffer);
    if (output_file_path) {
      try {
        await fs.writeFile(output_file_path, compressedData);

        return null;
      } catch (error) {
        throw error;
      }
    }
    return compressedData;
  }

  async decompress(input_file_path, output_file_path = null) {
    let data;
    try {
      data = await fs.readFile(input_file_path);
    } catch (error) {
      console.error('Could not open input file ...');
      throw error;
    }
    const output_buffer = [];
    let i = 0;
    while (i < data.length) {
      const flag = data[i];
      i += 1;
      if (!flag) {
        output_buffer.push(data[i]);
        i += 1;
      } else {
        const byte1 = data[i];
        const byte2 = data[i + 1];
        i += 2;
        const distance = (byte1 << 4) | (byte2 >> 4);
        let length = byte2 & 0xf;
        if (length === 0) {
          length = 16;
        }
        for (let j = 0; j < length; j++) {
          output_buffer.push(output_buffer[output_buffer.length - distance]);
        }
      }
    }
    const outData = Buffer.from(output_buffer);
    if (output_file_path) {
      try {
        await fs.writeFile(output_file_path, outData);
      } catch (error) {
        throw error;
      }
    }
    return outData;
  }

  findLongestMatch(data, currentPosition) {
    const endOfBuffer = Math.min(
      currentPosition + this.lookahead_buffer_size,
      data.length + 1
    );
    let bestMatchDistance = -1;
    let bestMatchLength = -1;
    for (let j = currentPosition + 2; j < endOfBuffer; j++) {
      let startIndex = Math.max(0, currentPosition - window_size);
      let substring = data.slice(currentPosition, j);
      for (let i = startIndex; i < currentPosition; i++) {
        let repetitions = Math.floor(substring.length / (currentPosition - i));
        let last = substring.length % (currentPosition - i);
        let matchedString = Buffer.alloc(0);
        for (let k = 0; k < repetitions; k++) {
          matchedString = Buffer.concat([
            matchedString,
            data.slice(i, currentPosition),
          ]);
        }
        if (last > 0) {
          matchedString = Buffer.concat([
            matchedString,
            data.slice(i, i + last),
          ]);
        }
        if (
          matchedString.equals(substring) &&
          substring.length > bestMatchLength
        ) {
          bestMatchDistance = currentPosition - i;
          bestMatchLength = substring.length;
        }
      }
    }
    if (bestMatchDistance > 0 && bestMatchLength > 0) {
      return [bestMatchDistance, bestMatchLength];
    }
    return null;
  }
}

module.exports = LZ77Compressor;
