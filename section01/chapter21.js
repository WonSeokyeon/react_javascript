// //비동기식으로 프로그램 실행
// console.log(1)
// task(10,20,(sum)=>{console.log(sum)})
// console.log(3)

// //함수 선언식
// function task(a,b,callback){
// setTimeout(()=>{
//   let sum = a+b
//   callback(sum)
// },1000)
// }

// 1. orderFood 함수 정의 (주석 해제)
function orderFood(food, callback) {
  console.log(`서버로 음식 주문! : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}

// 2. coolFood 함수 정의
function coolFood(food, callback) {
  console.log(`서버로 음식에 대한 옵션 지정! : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}

// 3. freezeFood 함수 정의
function freezeFood(food, callback) {
  console.log(`냉동해주세요! : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}

// 4. 비동기 3단계 연속 실행 (올바른 중첩 구조)
orderFood("백숙", (food) => {
  console.log(`${food} 음식을 완료 했습니다.`);
  
  coolFood("뜨거운 " + food, (coolResult) => {
    console.log(`${coolResult} 아이스 백숙 완료!`);
    
    freezeFood(coolResult, (freezeResult) => {
      console.log(`${freezeResult} 냉동 백숙 완료!`);
    });
  });
});