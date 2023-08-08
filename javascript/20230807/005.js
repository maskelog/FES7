// map
// 면접 질문에서 많이 나옴
// 교과서 map의 용도와
// 실무에서의 map의 용도가 다름

// map의 형태
[1, 2, 3].map((value, index, arr)=> {
    console.log(value, index, arr)
    return value
})

// 교재에서는 주료 아래와 같이 써있음
[1,2,3].map(v=> {
   return v**2
})

(3) [1, 4, 9]

[1, 2, 3, 4].map(v => {
    return v * 3
})

// forEach와 차이점
// 1. forEach은 return이 없음
// 2. map은 원본을 수정하여 새로운 배열을 만들고, forEach는 원본 배열을 변경 안함

// forEach의 경우 1부터 100까지 더하는 코드
let sum = 0
Array(100).fill(0),forEach((v, i) => {
    sum += i + 1
})
console.log(sum)

// map을 사용해서 1부터 100까지 더하는 코드
let sum = 0 
Array(100).fill(0).map((v, i) => i)

[1, 2, 3, 4].map(v => 'hello world')
// 1. v는 1,2,3,4 입니다. index, arr는 들어가지 않음
// 2. return은 'helllo world'
// ['hello world', 'hello world', 'hello world', 'hello world']

[1, 2, 3, 4].map(v => 'hello world')
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map(v => 'hello' + v)
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => 'hello' + (i + 1))
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => 'hello' + i)
// ['hello1', 'hello2', 'hello3', 'hello4']

// 같은 코드 1
[1, 2, 3, 4].map(v => 'hello' + v)

// 같은 코드 2
function 함수(v) {
    return 'hello' + v
}
[1, 2, 3, 4].map(함수)

// 같은 코드 3
[1, 2, 3, 4].map(function (v) {
    return 'hello' + v
})

// 같은 코드 4
[1, 2, 3, 4].map((v) => {
    return 'hello' + v
})


data.map(v => 'hello' + v)
data // 원본은 수정되지 않음!!!
