//함수 호이스팅 ( 함수 선언문에서만 동작함)
// 익명함수, 화살표함수에서는 미동작
//console.log(helloA()) // 에러
console.log(helloB())
console.log(helloc())

let helloA = function(){
  return "함수 표현식에 익명 함수입니다."
}
//함수 선언문 호이스팅 발생
function helloB() {
  return "함수 표현식에 익명 함수입니다."
}

let helloC = ()=> "함수 표현식에 익명 함수입니다."
