// pending : 대기상태

// 성공
// function sayHello() {
//   return new Promise((resolve, reject) =>{
//     const hello = "Hello Hello";
//     resolve(hello);
//   });
// }
// sayHello().then((resolvedData) => {
//   console.log(resolvedData);
// });

// error
// function sayHello() {
//   return new Promise((resolve, reject) =>{
//   reject(new Error());
//   });
// }

// sayHello()
// .then((resolvedData) => {
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData) => {
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData) => {
//   console.log(resolvedData);
// })
// // 캐치문법
// .catch((error) =>{
//   console.log(error);
// });

// .then 여러번 사용 가능
// function sayHello() {
//   return new Promise((resolve, reject) =>{
//   resolve("hello!!!");
//   });
// }

// sayHello()
// .then((resolvedData) => {
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData) => {
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData) => {
//   console.log(resolvedData);
// })
// // 캐치문법
// .catch((error) =>{
//   console.log(error);
// });

// async : then 복잡성을 줄이기 위해 사용

function sayHello() {
  return new Promise((resolve, reject) =>{
  resolve("hello!!!");
  });
}

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}
// Promise가 비동기로 작동되기 때문에 await를 사용하지 않으면 밑에 있는 코드들이 바로 실행되기때문에 sayHello가 끝나면 밑에 코드 작동

// async await 문법을 적용하면 일반적인 코드작성 규칙을 따르기 때문에 코드 보기가 편리함

test();

// pulfilled : 이행상태
// rejected : 실패상태