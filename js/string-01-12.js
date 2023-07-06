// lesson 1:
export const countWords = (str) => {
  if (typeof str !== 'string') return 'Is not an string';
  if (str.length === 0) return 0;

  return str.split(' ').length;
};

// lesson 2:
// statistics[stəˈtɪstɪks]: số liệu thống kê
export const statisticsWordsV1 = (str) => {
  if (typeof str !== 'string') return 'Not an string';
  if (str.length === 0) return 'String empty';

  let obj = {};
  str = str.toLowerCase();
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] in obj ? obj[words[i]]++ : (obj[words[i]] = 1);
  }
  delete obj[''];
  return obj;
};

export const statisticsWordsV2 = (str) => {
  if (typeof str !== 'string') return 'Not an string';
  if (str.trim().length === 0) return 'String empty';

  let statistics = {};
  str
    .toLowerCase()
    .split(' ')
    .filter((x) => x !== '')
    .forEach((word) => {
      word in statistics ? statistics[word]++ : (statistics[word] = 1);
      return statistics;
    });

  delete statistics[''];
  return statistics;
};

export const statisticsWordsV3 = (str) => {
  if (typeof str !== 'string') return 'Not an string';
  if (str.trim().length === 0) return 'String empty';

  return str
    .toLowerCase()
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistics, word) => {
      word in statistics ? statistics[word]++ : (statistics[word] = 1);
      return statistics;
    }, {});
};

// lesson 3:
export const statisticsCharactersV1 = (str) => {
  if (typeof str !== 'string') return 'Not an string';
  if (str.trim().length === 0) return 'String empty';

  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  obj['space'] = obj[' '];
  delete obj[' '];
  return obj;
};

export function statisticsCharactersV2(str) {
  if (typeof str !== 'string') return 'Not an string';
  if (str.trim().length === 0) return 'String empty';

  const obj = [...str].reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {});

  obj['space'] = obj[' '];
  delete obj[' '];

  return obj;
}

// lesson 4:
export const countEmailsV1 = (str) => {
  if (typeof str !== 'string' || str.trim().length === 0) return 'Please enter a valid string';

  // tìm những gmail có @, .com, .vn
  let emails = str.trim().split(' ');
  let emailsArr = emails.filter(
    (email) => (email.includes('@') && email.includes('.com')) || email.includes('.vn')
  );

  // loại bỏ .com .vn
  let countsEmail = [];
  for (let i = 0; i < emailsArr.length; i++) {
    countsEmail.push(emailsArr[i].replace(/\.(com|vn)$/, ''));
  }

  // x@y có x >= 3 và y >= 3
  let count = 0;
  for (let i = 0; i < countsEmail.length; i++) {
    if (countsEmail[i].split('@')[0].length >= 3 && countsEmail[i].split('@')[1].length >= 3) {
      count++;
    }
  }

  return count > 0 ? count : 'Please enter the correct email';
};

export const countEmailsV2 = (str) => {
  if (typeof str !== 'string' || str.trim().length === 0) return 'Please enter a valid string';

  // tìm những gmail có @, .com, .vn
  let emails = str
    .trim()
    .split(' ')
    .filter((email) => (email.includes('@') && email.includes('.com')) || email.includes('.vn'));

  // loại bỏ .com .vn
  let countsEmail = emails.reduce((acc, cur) => {
    acc.push(cur.replace(/\.(com|vn)$/, ''));
    return acc;
  }, []);

  // đếm gmail >= 6 và x@y có x >= 3 và y >= 3
  let count = countsEmail.reduce((acc, cur) => {
    if (cur.split('@')[0].length >= 3 && cur.split('@')[1].length >= 3) {
      acc++;
    }
    return acc;
  }, 0);

  return count > 0 ? count : 'Please enter the correct email';
};

export function countEmailsV3(str) {
  if (typeof str !== 'string' || str.trim().length === 0) return 'Please enter a valid string';

  const emails = str
    .trim()
    .split(' ')
    .filter((email) => /@.*\.(com|vn)$/.test(email))
    .map((email) => email.replace(/\.(com|vn)$/, ''));

  const count = emails.filter(
    (email) => email.split('@')[0].length >= 3 && email.split('@')[1].length >= 3
  ).length;

  return count > 0 ? count : 'Please enter the correct email';
}

// lesson 5:
export const countURLsV1 = (str) => {
  if (typeof str !== 'string' || str.trim().length === 0) return 'Invalid URL';

  let urls = str
    .trim()
    .split(' ')
    .filter(
      (url) =>
        (url.includes('http://') ||
          url.includes('https://') ||
          url.includes('ws://') ||
          url.includes('wss://')) &&
        (url.includes('.com') || url.includes('.com.vn') || url.includes('.vn'))
    );

  let countUrls = urls.reduce((acc, cur) => {
    acc.push(
      cur
        .replace('ws://', '')
        .replace('wss://', '')
        .replace('http://', '')
        .replace('https://', '')
        .replace('.com', '')
        .replace('.vn', '')
    );
    return acc;
  }, []);

  return countUrls ? countUrls.filter((url) => url.length >= 3).length : 0;
};

export const countURLsV2 = (str) => {
  if (typeof str !== 'string' || str.trim().length === 0) return 'Invalid URL';

  const urls = str
    .trim()
    .split(' ')
    .filter(
      (url) =>
        /(https?|wss?):\/\/[^\s/$.?#].[^\s]*/g.test(url) &&
        ['.com', '.vn', '.com.vn'].some((domain) => url.includes(domain))
    );
  const countUrls = urls
    .map((url) =>
      url
        .replace(/(https?|wss?):\/\//, '')
        .replace(/\/.*$/, '')
        .replace(/(\.com|\.vn|\.com\.vn)/g, '')
    )
    .filter((url) => url.length >= 3);

  return countUrls.length;
};

// lesson 6:
// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ object --> string
export const getDisplayedAddress = (obj) => {
  // if (
  //  !obj || typeof obj !== 'object' || Array.isArray(obj) ||
  //  obj === null || Object.keys(obj).length === 0
  // ) { throw new Error('Invalid input') }
  if (Object.prototype.toString.call(obj) !== '[object Object]') throw new Error('Invalid input');
  if (Object.keys(obj).length === 0) throw new Error('Invalid input');

  let empty = '';
  let key1 = obj.number && obj.street ? obj.number + ' ' : obj.number ? obj.number + ', ' : '';
  let key2 = obj.street ? obj.street + ', ' : '';
  let key3 = obj.ward ? obj.ward + ', ' : '';
  let key4 = obj.district ? obj.district + ', ' : '';
  let key5 = obj.city ? obj.city + ', ' : '';

  empty += key1;
  empty += key2;
  empty += key3;
  empty += key4;
  empty += key5;

  return empty.trim().slice(0, -1);
};

// lesson 7:
// Viết hàm fillPath(path, params) thay thế các chuỗi params trong path = giá trị object params
// fill: điền vào, path: đường dẫn, params: tham số
export const fillPath = (path, params) => {
  if (Object.prototype.toString.call(path) !== '[object String]') throw new Error('Invalid input');
  if (path.trim() === '') throw new Error('Invalid input');

  if (Object.prototype.toString.call(params) !== '[object Object]')
    throw new Error('Invalid input');
  if (Object.keys(params).length === 0) throw new Error('Invalid input');

  Object.keys(params).map((x) => {
    path = path.replace(`:${x}`, params[x]);
  });
  return path;
};
