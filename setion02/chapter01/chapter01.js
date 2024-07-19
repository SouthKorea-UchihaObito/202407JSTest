// 1. Falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

/*
    위와 같은 값들은 Falsy 한 값으로써 이렇게 조건문에서는 거짓으로 평가된다.
*/

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값을 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if (t1) {
//   console.log("Truthy");
// }

// 3. 활용 사례

function printName(person) {
  //   if (person === undefined || person === null) {
  //     console.log("person is value not");
  //     return; // 아래 console.log() 구문이 실행되지 못하도록 종료 시킴
  //   }
  /*
    위와 같이 상황에 따라 값이 더 따라 붙는다면 복잡해지기 때문에 
    Falsy한 값 이므로 아래와 같이 간단하게 마무리 할수 있다.
  */
  if (!person) {
    console.log("person is value not");
    return;
  }
  console.log(person.name);
}

let person = {
  name: "shim jae hun",
};

printName(person);
