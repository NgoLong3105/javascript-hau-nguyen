# Setup Jest framework

# Tham khảo: https://jestjs.io/docs/getting-started

## 1. Khởi tạo npm

npm init
(test command: npm run test, git repository:..., keywords: javascript, author: Ngo Long, license: MIT);

## 2. Cài đặt jest dạng dev dependencies

npm install --save-dev jest

## 3. Cài đặt Babel packages

npm install --save-dev babel-jest @babel/core @babel/preset-env

## 4. Add babel.config.js

- Tạo ra 1 file 'babel.config.js'
  module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
