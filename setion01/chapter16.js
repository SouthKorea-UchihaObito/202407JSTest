// 1. 상수 객체

const animal = {
  type: "고양이",
  name: "나비",
  color: "yellow",
};

animal.age = 2; // 추가
animal.name = "치증"; // 수정
delete animal.color; // 삭제
// 저장되어 있는 프로터피값을 수정하거나 삭제 추가하는것은 가능하다.

// 2. 메서드

// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "shim jae hun",
  // 메서드 선언 ↓
  sayHi() {
    console.log("hellow");
  },
  //   sayHi: function () {
  //     console.log("hellow");
  //   },

  // 이런 메서드들은 보통 언제 사용이 되냐하면 이 객체의 동작을 정의하는 데에 사용이됨
};
person.sayHi();
// 혹은
// person["sayHi"]();
