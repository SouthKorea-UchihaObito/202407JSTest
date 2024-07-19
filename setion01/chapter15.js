// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "shim jae hun",
  age: 26,
  hobby: "게임",
  extra: {},
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let personName = person.name; // 점 표기법

let personAge = person["age"]; // 괄호 표기법

// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "Front-End Developer";
person["likeFood"] = "회";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["likeFood"] = "고기";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["likeFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result2);
