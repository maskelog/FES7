// 객체타입(Object Types)
// 객체타입의 특징은 객체는 프로퍼티와 메서드를 가지며 둘은 각각 객체의 상태와 동작을 나타냄
// 값의 변수를 저장할 때 값 자체가 아닌 값의 위치가 할당됨

// 값이 변경 되었지만 화살표가 달라지지 않았고
let arr1 = [1, 2, 3]
let arr2 = arr1;
console.log(arr2);

arr1[0] = 10;
// arr1 = [10, 20]
console.log(arr2);

// 비교해보세요.
// 값이 변경이 되었고 화살표도 달라짐
let value1 = 10;
let value2 = value1;
console.log(value2);

value1 = 20;
console.log(value2);


