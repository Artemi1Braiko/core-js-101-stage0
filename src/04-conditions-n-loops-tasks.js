function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}

function getFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  const rect1Right = rect1.left + rect1.width;
  const rect1Bottom = rect1.top + rect1.height;
  const rect2Right = rect2.left + rect2.width;
  const rect2Bottom = rect2.top + rect2.height;

  return !(
    rect1Right <= rect2.left ||
    rect2Right <= rect1.left ||
    rect1Bottom <= rect2.top ||
    rect2Bottom <= rect1.top
  );
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  const distance = Math.hypot(dx, dy);
  return distance < circle.radius;
}

function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const leftBracket = isStartIncluded ? '[' : '(';
  const rightBracket = isEndIncluded ? ']' : ')';
  return `${leftBracket + start}, ${end}${rightBracket}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  const reversed = parseInt(
    Math.abs(num).toString().split('').reverse().join(''),
    10
  );
  return num < 0 ? -reversed : reversed;
}

function isCreditCardNumber(ccn) {
  const str = ccn.toString();
  let sum = 0;
  let isEven = false;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    let digit = parseInt(str[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  if (num < 10) {
    return num;
  }
  const sum = num
    .toString()
    .split('')
    .reduce(function (acc, d) {
      return acc + parseInt(d, 10);
    }, 0);
  return getDigitalRoot(sum);
}

function isBracketsBalanced(str) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };
  const closing = [')', ']', '}', '>'];

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (closing.indexOf(char) !== -1) {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) {
    return '';
  }

  const splitPaths = pathes.map(function (path) {
    return path.split('/');
  });
  const result = [];

  for (let i = 0; i < splitPaths[0].length; i += 1) {
    const segment = splitPaths[0][i];
    let allMatch = true;
    for (let j = 1; j < splitPaths.length; j += 1) {
      if (splitPaths[j][i] !== segment) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) {
      result.push(segment);
    } else {
      break;
    }
  }

  if (result.length === 0) {
    return '';
  }
  if (result.length === 1 && result[0] === '') {
    return '/';
  }
  return `${result.join('/')}/`;
}

function getMatrixProduct(m1, m2) {
  const result = [];
  for (let i = 0; i < m1.length; i += 1) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j += 1) {
      let sum = 0;
      for (let k = 0; k < m1[0].length; k += 1) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const a = position[line[0][0]][line[0][1]];
    const b = position[line[1][0]][line[1][1]];
    const c = position[line[2][0]][line[2][1]];
    if (a && a === b && a === c) {
      return a;
    }
  }

  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
