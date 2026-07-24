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
