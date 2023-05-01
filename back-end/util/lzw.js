const fs = require('fs').promises;
class LZWCompressor {
  async compress(input_file_path, output_file_path) {
    let data;
    let string = '';
    const compressed_data = [];
    const maximum_table_size = Math.pow(2, 12);
    let dictionary_size = 256;
    try {
      data = await fs.readFile(input_file_path, 'utf8');
    } catch (error) {
      console.error('Could not open input file ...');
      throw error;
    }
    let dictionary = {};
    for (let i = 0; i < dictionary_size; i++) {
      dictionary[String.fromCharCode(i)] = i;
    }

    for (const symbol of data) {
      const string_plus_symbol = string + symbol;
      if (dictionary[string_plus_symbol] !== undefined) {
        string = string_plus_symbol;
      } else {
        compressed_data.push(dictionary[string]);
        if (dictionary_size <= maximum_table_size) {
          dictionary[string_plus_symbol] = dictionary_size;
          dictionary_size++;
        }
        string = symbol;
      }
    }
    if (dictionary[string] !== undefined) {
      compressed_data.push(dictionary[string]);
    }
    const buffer = Buffer.alloc(compressed_data.length * 2);
    for (let i = 0; i < compressed_data.length; i++) {
      buffer.writeUInt16BE(compressed_data[i], i * 2);
    }
    try {
      await fs.writeFile(output_file_path, buffer);
    } catch (error) {
      throw error;
    }
  }

  async decompress(input_file_path, output_file_path) {
    let file;
    let compressed_data = [];
    let next_code = 256;
    let decompressed_data = '';
    const dictionary_size = 256;
    let maximum_table_size = Math.pow(2, 12);
    let string = '';
    try {
      file = await fs.readFile(input_file_path);
    } catch (error) {
      console.error('Could not open input file ...');
      throw error;
    }

    for (let i = 0; i < file.length; i += 2) {
      compressed_data.push(file.readUInt16BE(i));
    }
    let dictionary = new Array(dictionary_size)
      .fill()
      .map((_, i) => String.fromCharCode(i));

    for (let i = 0; i < compressed_data.length; i++) {
      const code = compressed_data[i];
      if (!dictionary[code]) {
        dictionary[code] = string + string[0];
      }
      decompressed_data += dictionary[code];
      if (string.length !== 0) {
        dictionary[next_code++] = string + dictionary[code][0];
      }
      string = dictionary[code];
      if (
        next_code >= maximum_table_size &&
        dictionary_size < maximum_table_size
      ) {
        dictionary_size++;
        maximum_table_size = Math.pow(2, dictionary_size);
      }
    }

    try {
      await fs.writeFile(output_file_path, decompressed_data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LZWCompressor;
