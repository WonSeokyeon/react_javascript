//배열구조 분해 할당
let arr = [1, 2, 3]; 
let [one, two, three, four = 4] = arr; 
console.log(one, two, three,four ); 

let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
}; 
 
let { 
  age: myAge,    //age 변수명을 myAge 
  hobby, 
  name, 
  extra = "hello", 
} = person; 
 
console.log(myAge, name, hobby, extra); 

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 
const func1 = ({ name, age, hobby, extra }) => { 
  console.log(name, age, hobby, extra); 
}; 
 
func1(person); 

// 4. 배열 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 
const func2 = ([name, age, hobby, extra]) => { 
  console.log(name, age, hobby, extra); 
}; 
let arr2 = [1,2,3,4];
 
func2(person); 