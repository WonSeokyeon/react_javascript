//객체를 순회해서 출력하기

const person = {
  name: "WSY",
  age: 35,
  tall: 179,
};

console.log(person);
// 객체에 키값을 배열로 가져와서 출력하기
let keyarray = Object.keys(person);
let valuearray = Object.values(person);
console.log(keyarray);

keyarray.forEach((e) => console.log(`${e} :${person[e]}`));
valuearray.forEach((e) => console.log(`${e}`));
