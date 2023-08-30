// 재정의 할수 없는 함수
const hello = "first hello";

if(true) {
  const hello = "second hello";
  console.log(hello) //second hello
}

console.log(hello); // first hello
// const 중괄호 scope를 가짐