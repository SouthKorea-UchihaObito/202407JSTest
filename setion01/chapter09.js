// 2. Switch 문

// if문과 기능 자체는 동일
// -> 다수의 조건을 처리 할때 if 보다 더 직관적

let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("없는 동물 입니다.");
  }
}
