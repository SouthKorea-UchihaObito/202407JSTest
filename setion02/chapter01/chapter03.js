// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당

let person = {
  name: "shim jea hun",
  age: 26,
  hobby: "game",
};

/* 안좋은 활용법(구조분해 할당 문법이 아닌경우) */
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// 구조 분해 할당
// 이때 참고로 이 객체의 구조분해 할당은 배열의 구조분해 할당과는 다르게 객체를 상징하는 중괄호를 이용한다라는 점

let { name, age, hobby, extra = "hello" } = person;

// 이런식으로 myAge라는 변수에 age 프로퍼티의 값을 담을수 있음
// let { name, age: myAge, hobby, extra = "hello" } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);

/*
    주의점은 객체를 넘겼을 때만 이런 식으로 중괄호와 함께 구조분해 할당을 받을 수 있는것이다.
*/
