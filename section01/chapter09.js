//객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터널

//객체 프로퍼티!!
let person = {
  name: "홍길동",
  age: 30,
  gender: false,
  extra: {
    ext1: 10,
    ext2: "str",
    ext3: false,
  },
  exter2: function () {
    console.log(this.age + "살");
  },
  exter4: () => {},

  exter3: [1, 2, 3, 4],
  "like cat": true,
};
console.log(person);
console.log(person["age"]);

//"like cat" :ture,
console.log(person["like cat"]);
person.exter2();

person.exter4();

//객체 property setter
person.name = "홍길동";
person["name"] = "김길동";

console.log(person);

//객체  property 삭제
delete person.age;
console.log(person);

//객체 속에 property의 존재 여부(in)
let result1 = "name" in person;
console.log(result1);

//객체속에 프로퍼티를 추가
person.address = "경기도 성남시";
console.log(person);
