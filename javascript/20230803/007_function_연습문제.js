function plus(x, y)
{
    return x + y
}

function minus(x, y)
{
    return x - y
}

function multip(x, y)
{
    return x * y
}

function division(x, y)
{
    return x / y
}

// 문제2 : 10,000,000,000과 같은 문자를 입력받아 10000000000 같은 숫자반환
function stringTonumber(inputString) {
    const deleteComma = inputString.replace(/,/g, '');
    return parseInt(deleteComma, 10); 
}

function stringTonumber(str){
    let answer = parseInt(str.replaceAll (',', ''))
    return answer
}

// 문제3: 입력된 문자열을 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어 주세요
// 입력: world
// 출력: ['w', 'o', 'r', 'l', 'd']

function printAndsplit(str){
    console.log(str)
    return str.split('')
}

printAndsplit('world')

// 문제4: 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어라
// 입력: 1, 2
// 출력 : (1 + 2) * (1 + 2) = 9

// 4.1 풀이
function addAndMultiply(x, y) {
    const sum = x + y;
    const result = sum * sum;
    return result;
}

// 4.2 풀이
function add(x,y){
    return x + y
}

function addAndMultiply(x, y) {
    let sum = add(x,y) * add(x,y)
    return sum;
}

// 4.3 풀이
function addAndMultiply(x, y) {
    //  메모리 효율을 위해 함수를 내부에서 만들어서 사용
    function add(x,y){
        return x + y
    }
    
    let sum = add(x,y) * add(x,y)
    return sum;
}

// 문제5: x**2 + 4x -12를 구해주는 함수를 만들어주세요
// 입력 : 3
// 출력 : 9 + 12 - 12 = 9
function QuadraticEquation(x)
{
    return x ** 2 + 4 * x - 12;
}

