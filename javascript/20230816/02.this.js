function a() {
    console.log(this)
}
a()

let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}

myObj.func1();

//window 객체
// 브라우저 환경의 전역공간을 의미, Node.js 에서는 전역공간은 global이란 이름을 가짐
