// 1. Spread 연산자

// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(number1, number2, number3) {
  console.log(number1, number2, number3);
  // 1 2 3
}

// console.log(arr1);
// funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {
  // ...은 매개변수를 정의하는 공간인 이 소괄호 안에 사용이 되었기 때문에 스프레드 연산자가 아니라 Rest 매개변수라는점을 주의해야한다.
  /*
    Rest 매개변수를 이용하면 매개변수가 아무리 많이 들어온다고 해도 배열에다가 한 방에 저장해 놓을수 있음
    만약에 추가로 첫 번째 매개변수의 경우에는 꼭 다른 이름으로 받고 싶다라고 하면 아래와 같이 작성하면된다.
    funcB(one, ...rest)

    주의할점은 ...rest 매개변수뒤에는 아무것도 선언할수가 없음
    rest 매개변수는 지금부터 나오는 뒤에 모든 인수들을 다 배열에 저장하는 그런 기능을 하기 때문에 오류가 난다
  */
  console.log(rest);
}
funcB(...arr1);
