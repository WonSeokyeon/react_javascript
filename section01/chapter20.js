let Object1={name :  "제우스", age : 40}
let Object2={...Object1}
 if(Object1===Object2){
  console.log("얕은복사")
 }else{console.log("깊은복사")}

console.log(JSON.stringify(Object1)+"문자열이야")
console.log(JSON.stringify(Object1)+"문자열이야")
console.log(JSON.stringify(Object1)+"문자열이야")