function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, function (_, i) {
    return i * 2 + 1;
  });
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function getArrayOfPositives(arr) {
  return arr.filter(function (num) {
    return num > 0;
  });
}

function getArrayOfStrings(arr) {
  return arr.filter(function (item) {
    return typeof item === 'string';
  });
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getUpperCaseStrings(arr) {
  return arr.map(function (str) {
    return str.toUpperCase();
  });
}

function getStringsLength(arr) {
  return arr.map(function (str) {
    return str.length;
  });
}

function insertItem(arr, item, index) {
  const result = arr.slice();
  result.splice(index, 0, item);
  return result;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr
    .map(function (row) {
      return row.join(',');
    })
    .join('\n');
}

function toStringList(arr) {
  return arr.join(',');
}

function toArrayOfSquares(arr) {
  return arr.map(function (x) {
    return x * x;
  });
}

function getMovingSum(arr) {
  let sum = 0;
  return arr.map(function (x) {
    sum += x;
    return sum;
  });
}

function getSecondItems(arr) {
  return arr.filter(function (_, i) {
    return i % 2 === 1;
  });
}

function propagateItemsByPositionIndex(arr) {
  return arr.reduce(function (result, item, i) {
    const items = [];
    for (let j = 0; j <= i; j += 1) {
      items.push(item);
    }
    return result.concat(items);
  }, []);
}

function get3TopItems(arr) {
  return arr
    .slice()
    .sort(function (a, b) {
      return b - a;
    })
    .slice(0, 3);
}

function getPositivesCount(arr) {
  return arr.filter(function (x) {
    return typeof x === 'number' && x > 0;
  }).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const order = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return arr.slice().sort(function (a, b) {
    return order.indexOf(a) - order.indexOf(b);
  });
}

function getItemsSum(arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter(function (x) {
    return !x;
  }).length;
}

function findAllOccurrences(arr, item) {
  return arr.filter(function (x) {
    return x === item;
  }).length;
}

function sortCitiesArray(arr) {
  return arr.slice().sort(function (a, b) {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, function (_, i) {
    return Array.from({ length: n }, function (__, j) {
      return i === j ? 1 : 0;
    });
  });
}

function getIntervalArray(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, function (_, i) {
    return start + i;
  });
}

function distinct(arr) {
  const result = [];
  arr.forEach(function (item) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

function group(array, keySelector, valueSelector) {
  const map = new Map();
  array.forEach(function (item) {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
  });
  return map;
}

function selectMany(arr, childrenSelector) {
  return arr.reduce(function (result, item) {
    return result.concat(childrenSelector(item));
  }, []);
}

function getElementByIndexes(arr, indexes) {
  return indexes.reduce(function (current, index) {
    return current[index];
  }, arr);
}

function swapHeadAndTail(arr) {
  const mid = Math.floor(arr.length / 2);
  const head = arr.slice(0, mid);
  const tail = arr.slice(-mid);
  const middle = arr.slice(mid, arr.length - mid);
  return tail.concat(middle).concat(head);
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
