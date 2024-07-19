// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }
// console.log(returnFalse() || returnTrue());

/*
    결과값 "False 함수"
    false

    단락평가가 지금 작동됨

    And 연산과 같은 논리 연산식에서 첫 번째 피연산자의 값만으로도 이 연산의 결과를
    확정할 수 있다면 그때는 두 번째 피연산자에는 접근조차 하지 않는 그런 실행 방식을 말한다.
    라고 했지만 
    첫번째 피연산자인

    returnTrue 연산자에는 접근조차 할 필요가 없으니까 그냥 함수 호출을 생략해버림

*/

// console.log(returnTrue() && returnFalse());
/*
    


    결과 값
    "True 함수"
    "False 함수"
    false

    단락평가가 작동되지 않음

    returnTrue 함수 호출의 결과가 true였기 때문에 True, End, True가
    나오면 true가 될 거고 false가 나오면 false가 될 거기 때문에 첫번째
    피연산자의 값만으로는 연산의 결과가 확정이 나지 않았음

    두번째 연산자도 호출해야함

    그래서 "False 함수" 메시지가 출력이 되는것임
*/

// console.log(returnFalse() && returnTrue());

// 단락평가 특정조건에 맞춰서함수를 아예 호출되지 않도록 하는 기능

/* 단락평가 활용 사례 */

function printName(person) {
  // if(!person) {
  //   console.log('person not value')
  //   return;
  // }
  const name = person && person.name;
  console.log(name || "person not value");
}

printName();
printName({ name: "shim jae hun" });
/*
  Truthy값 || Truthy값
  → 연산의 결과값은 첫번째 값으로 반환됨


Truthy값 && Truthy값
→ 연산의 결과값은 두번째 값으로 반환됨
*/
