//
function returnFalse() {
  console.log("false 함수");
  return false;
}

function returnTrue() {
  console.log("true 함수");
  return true;
}

console.log(false && true);
//console.log(returnFalse() && returnTrue());
console.log(returnFalse() || returnTrue());


//단락평가(자바스크립트가 무엇을  FALSE)
//기본타입: 디폴트 값이  false
//0, 0.0, null,"", false, nudefined, NaN

function printName(person){
let name= person && "존재함"
console.log (name ||"객체가 존재하지 않음");
}

printName()
printName({name : "wsy"})
let arr =  [0, 0.0, null,"", false, nudefined, NaN,[],{},()=>{}, function(){}, functionaa(){}]
for(let index in arr){

  console.log
}