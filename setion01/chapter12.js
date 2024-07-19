function FunA() {}
let varA = FunA;
varA();

// 1. 함수 표현식 값으로서 취급됨 호이스팅의 대상이 되지 않음
let varB = function FunB() {};

// 2. 화살표 함수
let varC = (value) => {
  return value + 1;
}; // 값만 반환하기만 한다면 return 생략가능
console.log(varC(10));
