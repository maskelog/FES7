import ColaGenerator from "./js/colaGenerator.js";

const colaGenerator = new ColaGenerator();
// console.log(await colaGenerator.loadData());
colaGenerator.setup();

// 탑레벨 await 최근 추가된 문법

// (async () => {
//   await colaGenerator.loadData()
// })()

// https://v8.dev/features/top-level-await