function Greeting(wid, hei) {
  function Another() {
    // 중첩함수
    console.log("anohter");
  }
  Another();
  let area = wid * hei;
  return area;
}
// Greeting(10, 50);

let area1 = Greeting(50, 10);
console.log(area1);
