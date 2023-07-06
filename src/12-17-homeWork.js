export const getUniqueWords = (sentence) => {
  if (
    Object.prototype.toString.call(sentence) !== '[object String]' ||
    sentence.trim().length === 0
  )
    return [];

  return [...new Set(sentence.split(' '))];
};

export const buildCategoryMapV1 = (categoryList) => {
  if (!Array.isArray(categoryList) || categoryList.length === 0)
    throw new Error('Please enter a valid');

  return categoryList.reduce((obj, category) => ({ ...obj, [category.id]: category }), {});
};

export const buildCategoryMapV2 = (categoryList) => {
  if (!Array.isArray(categoryList) || categoryList.length === 0)
    throw new Error('Please enter a valid');

  return categoryList.reduce((map, category) => (map.set(category.id, category), map), new Map());
};

export const isValidPIN = (pin) => {
  if (typeof pin !== 'number' || String(pin).length !== 6) return false;

  let arr = Array.from(String(pin), Number);

  let ascending = 0;
  let descending = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] - 1) ascending++;
    if (arr[i] === arr[i + 1] + 1) descending++;
  }
  if (ascending >= 5 || descending >= 5) return false;

  const frequencyPIN = {};
  for (const digit of arr) {
    frequencyPIN[digit] = (frequencyPIN[digit] || 0) + 1;
  }

  if (Object.values(frequencyPIN).some((frequency) => frequency >= 4)) return false;

  return true;
};

export function isValidBracketPairs(str) {
  if (Object.prototype.toString.call(str) !== '[object String]' || str.trim() === '')
    throw new Error('Invalid input');

  const stack = [];
  const brackets = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (const char of str) {
    if (Object.values(brackets).includes(char)) {
      if (char !== brackets[stack.pop()]) {
        return false;
      }
    } else if (char in brackets) {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
