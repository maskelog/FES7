// let {one} = {one: 1}
// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴입니다.
// console.log(one);

// let {one, two, three, four} = {one: 1}
// 디스트럭쳐링은 콜론을 통해 변수를 추가적으로 생성할 수 있습니다.
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

/**
let food1, food2, food3;

const categories = {food1 : '과일', food2 : '채소', food3 : '육류'};

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;
*/

// const {food1, food2, food3} = {food1 : '과일', food2 : '채소', food3 : '육류'};

// console.log(food1, food2, food3);

function myFunc([a, b]) {
    console.log(a); 
    console.log(b);
  }
  
  const arr = [1, 2];
  
  myFunc(arr);