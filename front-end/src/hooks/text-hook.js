import { useCallback, useState } from 'react';

export const useTextVis = (inputText, ctype) => {
  const size = inputText.length;
  const windowSize = 5;
  const data = inputText;
  let [inputArr, setInputArr] = useState(
    Array.from(inputText).map((char) => {
      return { val: char, byteState: 'unv' };
    })
  );
  let [outputArr, setOutputArr] = useState([]);
  const [isAnimRunning, setAnimRunning] = useState(false);

  const updateVisit = useCallback(
    (curr) => {
      if (!inputArr || inputArr.length === 0) return;
      let newArr = [...inputArr];
      for (let i = 0; i < Math.min(curr - windowSize, size); i++) {
        newArr[i].byteState = 'vis';
      }
      for (
        let i = Math.max(curr - windowSize, 0);
        i < Math.min(curr, size);
        i++
      ) {
        newArr[i].byteState = 'inWindow';
      }
      if (curr < size) newArr[curr].byteState = 'curr';

      setInputArr(newArr);
    },
    [inputArr, size]
  );

  const updateVisitW = useCallback(
    (curr) => {
      let newArr = [...inputArr];
      for (let i = 0; i < Math.min(curr, data.length); i++) {
        newArr[i].byteState = 'vis';
      }
      if (curr < data.length) newArr[curr].byteState = 'curr';
      setInputArr(newArr);
    },
    [inputArr, data]
  );

  const updateOutput = useCallback((code) => {
    setOutputArr((prevState) => [...prevState, code]);
  }, []);

  const updateMatch = useCallback(
    (curr, dist, len) => {
      let newArr = [...inputArr];
      for (let i = curr - dist; i < len; i++) {
        if (i === curr) {
          newArr[i].byteState = 'curr-match';
          continue;
        }
        newArr[i].byteState = 'match';
      }
      setInputArr(newArr);
    },
    [inputArr]
  );

  const updateMatchW = useCallback(
    (curr, len) => {
      let newArr = [...inputArr];
      // newArr[curr].byteState = 'curr-match';
      for (let i = curr - len; i < Math.min(data.length, curr); i++) {
        newArr[i].byteState = 'match';
      }
      setInputArr(newArr);
    },
    [inputArr, data]
  );

  const updateUnique = useCallback(
    (curr) => {
      let newArr = [...inputArr];
      newArr[curr].byteState = 'unique';
      setInputArr(newArr);
    },
    [inputArr]
  );

  const findLongestMatch = useCallback(
    (currentPosition) => {
      const lookahead_buffer_size = 8;
      const endOfBuffer = Math.min(
        currentPosition + lookahead_buffer_size,
        size + 1
      );
      let bestMatchDistance = -1;
      let bestMatchLength = -1;
      for (let j = currentPosition + 2; j < endOfBuffer; j++) {
        let startIndex = Math.max(0, currentPosition - windowSize);
        let substring = data.slice(currentPosition, j);
        for (let i = startIndex; i < currentPosition; i++) {
          let repetitions = Math.floor(
            substring.length / (currentPosition - i)
          );
          let last = substring.length % (currentPosition - i);
          let matchedString = '';
          for (let k = 0; k < repetitions; k++) {
            matchedString += data.slice(i, currentPosition);
          }
          if (last > 0) {
            matchedString += data.slice(i, i + last);
          }
          if (
            matchedString === substring &&
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
    },
    [data, size]
  );

  const compress77 = useCallback(async () => {
    setAnimRunning(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    let i = 0;
    let code;
    while (i < size) {
      updateVisit(i);
      await new Promise((resolve) => setTimeout(resolve, 450));
      const match = findLongestMatch(i);
      if (match) {
        const [bestMatchDistance, bestMatchLength] = match;
        updateMatch(i, bestMatchDistance, bestMatchLength);

        await new Promise((resolve) => setTimeout(resolve, 800));
        code = {
          type: 1,
          dist: bestMatchDistance,
          len: bestMatchLength,
        };
        i += bestMatchLength;
      } else {
        updateUnique(i);
        await new Promise((resolve) => setTimeout(resolve, 800));
        code = {
          type: 0,
          data: inputArr[i].val,
        };
        i += 1;
      }
      updateOutput(code);
    }
    updateVisit(size + windowSize + 1);
    setAnimRunning(false);
  }, [
    size,
    updateVisit,
    findLongestMatch,
    updateOutput,
    updateMatch,
    updateUnique,
    inputArr,
  ]);

  const compressW = useCallback(async () => {
    setAnimRunning(true);
    const compressed_data = [];
    let dictionary_size = 256;
    const maximum_table_size = Math.pow(2, parseInt(12));
    let dictionary = {};
    for (let i = 0; i < dictionary_size; i++) {
      dictionary[String.fromCharCode(i)] = i;
    }
    let string = '';
    for (let i = 0; i < data.length; i++) {
      updateVisitW(i);
      await new Promise((resolve) => setTimeout(resolve, 450));
      const symbol = data[i];
      const string_plus_symbol = string + symbol;

      if (dictionary[string_plus_symbol] !== undefined) {
        string = string_plus_symbol;
      } else {
        compressed_data.push(dictionary[string]);
        console.log(dictionary[string], string, i, string.length);
        updateMatchW(i, string.length);
        await new Promise((resolve) => setTimeout(resolve, 450));
        console.log(inputArr);
        await new Promise((resolve) => setTimeout(resolve, 800));
        updateOutput({ type: 1, dist: dictionary[string], len: string });
        if (dictionary_size <= maximum_table_size) {
          dictionary[string_plus_symbol] = dictionary_size++;
        }
        string = symbol;
      }
    }
    if (dictionary[string] !== undefined) {
      compressed_data.push(dictionary[string]);
      updateMatchW(data.length, string.length);
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateOutput({ type: 1, dist: dictionary[string], len: string });
    }
    updateVisitW(data.length + 1);
    setAnimRunning(false);
  }, [updateVisitW, data, updateMatchW, inputArr, updateOutput]);

  let compressor;
  if (ctype === 'lz77') compressor = compress77;
  else compressor = compressW;

  return {
    inputArr,
    outputArr,
    compressor,
    isAnimRunning,
  };
};
