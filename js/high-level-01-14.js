// Bài toán rút tiền đơn giản
function theATM() {
  return {
    k500: 2,
    k200: 5,
    k100: 10,
    k50: 100,
  };
}

function totalATM() {
  const atm = theATM();
  return Object.keys(atm).reduce((total, key) => {
    let denomination = parseInt(key.slice(1));
    return total + denomination * 1000 * atm[key];
  }, 0);
}

export const withdraw = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount) || amount < 0)
    throw new Error('Please enter a valid number');
  if (amount % 50000 !== 0) throw new Error('Invalid balance');
  if (amount > totalATM()) throw new Error('Insufficient balance from ATM');

  let atm = theATM();
  let remainingAmount = amount;

  return Object.keys(atm).reduce((result, key) => {
    let denomination = parseInt(key.slice(1));
    let validNotes = atm[key];

    let count = Math.min(Math.floor(remainingAmount / (denomination * 1000)), validNotes);

    result[key] = count;
    remainingAmount -= denomination * 1000 * count;

    return result;
  }, {});
};
// Rút trích ngôn ngữ từ URL
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

export const getLanguageCodeFromURL = (url) => {
  if (typeof url !== 'string' || url.trim().length === 0)
    throw new Error('Please enter the string');

  const languageCode = url.split('/').slice(-1).toString();
  if (SUPPORTED_LANGUAGE_LIST.includes(languageCode)) {
    return languageCode;
  }

  return 'en';
};

// Kiểm tra độ mạnh của mật khẩu
export const isStrongPasswordV1 = (password) => {
  if (typeof password !== 'string') throw new Error('Please enter a valid password');
  if (password.length < 8) return false;

  const isLowerCase = [...password].some((character) => character === character.toLowerCase());
  const isUpperCase = [...password].some((character) => character === character.toUpperCase());
  const isNumber =
    password.includes('0') ||
    password.includes('1') ||
    password.includes('2') ||
    password.includes('3') ||
    password.includes('4') ||
    password.includes('5') ||
    password.includes('6') ||
    password.includes('7') ||
    password.includes('8') ||
    password.includes('9');
  const isSpecialChar =
    password.includes('@') ||
    password.includes('!') ||
    password.includes('#') ||
    password.includes('%') ||
    password.includes('^') ||
    password.includes('&') ||
    password.includes('(') ||
    password.includes(')');

  const isPassword = isLowerCase && isUpperCase && isSpecialChar && isNumber;

  return isPassword;
};

export const isStrongPasswordV2 = (password) => {
  if (typeof password !== 'string') throw new Error('Please enter a valid password');
  if (password.length < 8) return false;

  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[@!#%^&()]/.test(password);

  return hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar;
};

// Remove duplicated letters
export const uniqueLetters = (str) => {
  if (typeof str !== 'string') throw new Error('Please enter a valid input');

  str = str.trim();
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    if (str[i] === ' ') newStr += ' ';

    for (let j = 0; j < str.length; j++) {
      if (str[i] === ' ') continue;
      if (str[i] === str[j]) count++;
    }

    if (count === 1) newStr += str[i];
  }

  return newStr;
};

// count words in string
export const countWords = (str) => {
  if (typeof str !== 'string') throw new Error('Please enter a valid input');
  if (str === '') return 0;

  let result = [];
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '' && (/[a-z]/.test(arr[i]) || /[A-Z]/.test(arr[i]))) {
      result.push(arr[i]);
    }
  }

  return result.length;
};

// merge array
export const mergeArray = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  if (a === [] && b === []) return [];

  return [...new Set(a.concat(b))];
};

// find the most frequent number
export const findMostFrequentNumberV1 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return undefined;

  const obj = {};
  numberList.forEach((num) => (obj[num] = obj[num] ? obj[num] + 1 : 1));

  const mostValid = Object.values(obj).reduce((max, valid) => {
    valid > max ? (max = valid) : max;
    return max;
  }, 0);

  return numberList.find((number) => obj[number] === mostValid);
};

export const findMostFrequentNumberV2 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return undefined;

  const frequencyMap = new Map();
  numberList.forEach((num) => {
    const currentFrequency = frequencyMap.get(num) || 0;
    frequencyMap.set(num, currentFrequency + 1);
  });

  let mostFrequentNumber;
  let maxFrequency = 0;
  for (const [number, frequency] of frequencyMap.entries()) {
    if (frequency > maxFrequency) {
      mostFrequentNumber = number;
      maxFrequency = frequency;
    }
  }

  return mostFrequentNumber;
};

// count the number of male student
export const countStudentsMale = (studentList) => {
  if (!Array.isArray(studentList) || !studentList.length) return 0;

  const maleStudentList = studentList.filter((student) => {
    return (
      student.id !== undefined &&
      typeof student.gender === 'string' &&
      student.gender.toLowerCase() === 'male'
    );
  });

  return maleStudentList.length;
};

// calculation the total amount of the cart
export const calcTotalAmountCart = (cartItemList) => {
  if (!Array.isArray(cartItemList) || !cartItemList.length) return 0;

  const validCartItems = cartItemList.filter((cartItem) => {
    const { id, product, quantity } = cartItem;

    if (
      typeof cartItem !== 'object' ||
      Array.isArray(cartItem) ||
      !id ||
      !quantity ||
      !product.id ||
      !product.price ||
      product === null ||
      typeof product !== 'object' ||
      isNaN(parseInt(quantity)) ||
      isNaN(parseFloat(product.price))
    ) {
      return false;
    }

    return true;
  });

  const totalAmount = validCartItems.reduce((total, { product, quantity }) => {
    total += parseFloat(product.price) * parseInt(quantity);
    return total;
  }, 0);

  return totalAmount;
};

// filter products has amount more than 100.000đ
export const productListAmountMoreThan100000 = (productList) => {
  if (!Array.isArray(productList) || !productList.length) return [];

  const validProductList = productList.filter((cartItem) => {
    const { id, product, quantity } = cartItem;

    if (
      typeof cartItem !== 'object' ||
      Array.isArray(cartItem) ||
      !id ||
      !quantity ||
      !product.id ||
      !product.price ||
      product === null ||
      typeof product !== 'object' ||
      isNaN(parseInt(quantity)) ||
      isNaN(parseFloat(product.price))
    ) {
      return false;
    }

    return true;
  });

  const result = validProductList.filter((productItem) => productItem.product.price > 100000);

  return result;
};

// Returns an array evenly divided into subarrays by size
export const chunkArray = (arr, size) => {
  if (!Number.isInteger(size) || size <= 0) return [];
  if (!Array.isArray(arr) || !arr.length) return [];
  if (size > 20) throw new Error('Too many chunks');

  let myArr = [];
  for (let i = 0; i < arr.length; i += size) {
    myArr.push(arr.slice(i, i + size));
  }

  return myArr;
};

export const findSumPair = (numberList, targetSum) => {
  if (!Array.isArray(numberList) || !numberList.length) return [];
  if (!Number.isInteger(targetSum) || targetSum <= 0) return [];

  let arr = [];
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        arr.push(numberList[i], numberList[j]);
      }
    }
  }

  return arr.sort((a, b) => a - b);
};

// find the first number that is duplicate
export const findFirstNumberDuplicate = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return -1;

  let result;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number === numberList[i + 1]) result = number;
  }

  return !!result ? result : -1;
};

// check array is 'mountain' from
export const validMountainArrayV1 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return undefined;
  if (numberList.length < 3) return false;

  const maxNum = Math.max(...numberList);
  const maxIndex = numberList.indexOf(maxNum);

  if (maxIndex === 0 || maxIndex === numberList.length - 1) return false;

  for (let i = maxIndex; i < numberList.length; i++) {
    if (numberList[i] <= numberList[i + 1]) return false;
  }

  for (let i = 0; i < maxIndex; i++) {
    if (numberList[i] >= numberList[i + 1]) return false;
  }

  return true;
};

export const validMountainArrayV2 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return undefined;
  if (numberList.length < 3) return false;

  const maxIndex = numberList.indexOf(Math.max(...numberList));

  if (maxIndex === 0 || maxIndex === numberList.length - 1) return false;

  for (let i = 1; i < numberList.length; i++) {
    if (
      (i <= maxIndex && numberList[i] <= numberList[i - 1]) ||
      (i > maxIndex && numberList[i] >= numberList[i - 1])
    ) {
      return false;
    }
  }

  return true;
};
