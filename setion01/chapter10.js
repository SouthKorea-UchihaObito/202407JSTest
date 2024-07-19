for (let i = 0; i <= 10; i++) {
  // 짝수 일때는 아무것도 하지않고 건너뛰기
  if (i % 2 === 0) {
    // 조건식이 참이되면 continue 실행됨 continue을 만나게
    // 되면 반복문내에 다른 코드 들은 실행되지 않고 다음 반복회차로 넘어감
    continue;
  }
  console.log(i);
  if (i >= 5) {
    break;
  }
}
