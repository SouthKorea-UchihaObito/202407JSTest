// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;

// 연산에 참여하는 값들 중에  null, undefined가 아닌 값을 찾아내는 기능을 하는 연산자
// 둘다 값이 있다면 첫번째 값을 출력해줌
let var6 = var2 ?? var3;

let userName;
let userNickName = "Window";

// 이렇게 하면 userName 에 값이 없다면 userNickName로 대체해줌
let displayNmae = userName ?? userNickName;
console.log(displayNmae);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
let t1 = typeof var7;

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
