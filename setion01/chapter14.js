// 스코프
// 전역 스코프 / 지역 스코프
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funA() {
  let b = 2;
  console.log(a);
}

funA();
