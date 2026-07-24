const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
  //메서드 선언
  func1() {
    console.log(`${this.type}`);
  },
  //익명함수
  func2: function () {
    console.log(`${this.type}`);
  },

  func3: () => console.log(`${animal.name}`),
};

console.log(animal);
const animal2 = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal3 = animal;
animal.type = "고양이2";

console.log(animal2);
console.log(animal3);

animal.age = 20;
console.log(animal);

animal.name = "나비2";
console.log(animal);

animal.color = 123456;
console.log(animal);
console.log(typeof animal.color);

delete animal["age"];
console.log(animal);

animal.func1();
animal.func2();
animal.func3();
