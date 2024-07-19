// 1. 콜백함수

function Main(value) {
  value();
}

function Sub() {
  console.log("I am sub");
}

Main(function () {
  console.log("i am sub");
});

// 2. 콜백 함수의 활용

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i);
});

repeat(5, (i) => {
  console.log(i * 2);
});

repeat(5, (i) => {
  console.log(i * 3);
});
