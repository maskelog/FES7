// ✨✨✨✨✨✨✨✨
// 1. 비교 연산을 했을 때
let x = 3
let y = 5
console.log(x > y)

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// (true나 false가 아닌 경우 단락회로평가가 일어남)
let x = true
let y = false
console.log(x && y)

// 3. true나 false로 평가되는 것들
// if(value) {
//  // value가 true일 때 실행
//  // 그렇다면 어떤 value가 true일까?
// }
// 

if(Boolean('hello')){console.log('!!')} // true
if(Boolean('')) // false
if(Boolean(' ')) // true
if(Boolean(' ')) // true
Boolean(0) // false
Boolean(1) // true
Boolean(-1) // true
// !!null 실무에서 true, false를 구분할때 사용
// !!null, !!'hello'

// 4. javascript에서 힘들게 하는 true, false
x = [1, 2, 3]
x.pop()
x.pop()
x.pop() //  x가 가리키고 있는 값은 변한적이 없고 true, false로 바뀌는 것은 옳지 않다. (javascript의 생각)

Boolean([1, 2, 3]) // true
Boolean([]) // true
Boolean({ 'one': 1 }) // true
Boolean({}) // true

null == undefined // true
null > undefined // false, 다른 비교도 false
undefined < 100 // 숫자와 비교는 다 false


