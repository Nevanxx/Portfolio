const _ = {
    clamp(number, lower, upper) {
      // Clamp number by lower and upper bound
      const lowerClampedValue = Math.max(number, lower);
      const upperClampedValue = Math.min(lowerClampedValue, upper);
      // Return clamped value
      return upperClampedValue;
    },
  
    inRange(number, start, end) {
      // Check if end is undefined, then set end value equal to start value
      if (end === undefined) {
        end = start;
        start = 0;
      }
  
      // Check if start is greater than end value, then swap the values
      if (start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
  
      // Define isInRange variable
      let isInRange = number >= start && number < end;
  
      // Return the result of the previous operation
      return isInRange;
    },
    words(string) {
      let words = string.split(" ");
      return words;
    },
    pad(string, length) {
      // If the desired length is less than or equal to the string length, return the original string
      if (length <= string.length) {
        return string;
      }
      // Calculate the lengths of the start and end padding
      let startPaddingLength = Math.floor((length - string.length) / 2);
      let endPaddingLength = length - string.length - startPaddingLength;
      // Create paddedString with space characters repeated
      const paddedString =
        " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
      return paddedString;
    },
    has(object, key) {
      let hasValue = object && key !== undefined;
      return object !== null && typeof object === "object" && key in object;
      return hasValue;
    },
    invert(object) {
      invertedObject = {};
      for (let key in object) {
        let originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
    findKey(object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue === true) {
          return key;
        }
      }
      return undefined;
    },
    drop(array, n) {
      if (n === undefined) {
        n = 1;
      }
      let droppedArray = array.slice(n);
      return droppedArray;
    },
    dropWhile(array, predicate) {
      let dropNumber = array.findIndex(
        (element, index) => !predicate(element, index, array)
      );
      let droppedArray = dropNumber === -1 ? [] : array.slice(dropNumber);
      return droppedArray;
    },
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
  };
  