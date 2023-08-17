// 팩토리얼은 1부터 n까지의 곱을 구하는 함수를 의미합니다.
function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}

// sigma는 1부터 n까지의 합을 계산하는 함수를 의미합니다.
function sigma(n){
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)
}