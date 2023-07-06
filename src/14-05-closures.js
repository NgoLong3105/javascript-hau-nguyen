// - [Closure] /ˈkloʊ.ʒɚ/: khép kín
// - [access] /ˈæk.ses/: trup cập
// - A closures is a function having access parent scope,
// even after the parent function is closed.
// - [counter]/ˈkaʊn.t̬ɚ/: quầy tính tiền
//   ex: a counter.

// memorization - sử dụng kĩ thuật ghi nhớ
function createCounter(initialValue) {
  let value = initialValue || 0; // --> lexical scope
  let cache = {}; // --> nếu chưa có kết quả thêm vô, có rồi return luôn

  // closures
  function increase() {
    value++;
  }

  // closures
  function decrease() {
    value--;
  }

  // closures
  function getValue() {
    console.log(value);
    return value;
  }

  return {
    increase,
    decrease,
    getValue,
  };
}

// tạo 1 value và 1 môi trường để value đó tôn tại
// và dùng increase, decrease, ... để tương tác value đó
const counter1 = createCounter(0);
counter1.increase();
counter1.increase();
counter1.getValue();

// gọi counter khác thì tạo 1 value mới và 1 môi trường mới
// và ko liên quan gì đến counter 1
const counter2 = createCounter(10);
counter2.increase();
counter2.increase();
counter2.getValue();
