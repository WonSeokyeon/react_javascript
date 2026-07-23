//전역 변수 & 지역변수

let a=1;

function funcA(){
   let b =2;
   console.log(a);

}
funcA();
//console.log(b);

//모든 블럭에 들어있는 변수선언은 지역변수!!!
//매개변수 = 지역변수

if(true){
let c = 10;
console.log(c);

}
//console.log(c);

for (let index = 0; index < 2; index++) {
  let count = 1;
  count +=index;
}
//console.log(count); 에러 발생
console.log(index);