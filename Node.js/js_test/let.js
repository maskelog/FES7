let hello = "first hello";

if (true) {
  let hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello

// var와 차별되는점은 let처럼 두번 초기화는 불가능하다
// var선언 방식과 차이는 중괄호 scope 차이