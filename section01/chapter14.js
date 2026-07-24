//forEach 내장함수 활용하기

const arr = [1, 2, 3, 4];
arr.forEach((e) => console.log(e));

// arr.forEach((e) => {
//   console.log(e);
//newArr.push(e * 2);
// });
// console.log(newArr);

//배열의 내장함수  MAP->  새로운 계산된 내용을 배열로 리턴한다.
let newarr2 = arr.map((e) => (e % 2 === 0 ? e * 2 : e * 3));
console.log(newarr2);

//배열의 내장함수 includes
let number = 3;
arr.forEach((e) => {
  if (e === number) {
    console.log(true);
  }
});

console.log(arr.includes(6));

//4. 배열에서 찾고자하는 값의 인덱스를 출력
let index = -1;
let count = 0;
arr.forEach((e) => {
  if (e === number) {
    index = count;
  }
  count++;
});
console.log(index);

console.log(arr.indexOf(number));
console.log("************************");
let index2 = arr.findIndex((e) => e === number);
console.log(index);

const arr2 = [
  { color: "red" },
  { color: "blue" },
  { color: "yellow" },
  { color: "white" },
];
let index3 = -1;
let count3 = 0;
arr2.forEach((e) => {
  if (e.color === "white") {
    index3 = count3;
  }
  count3++;
});
console.log(index3);
console.log(arr2[index3]);

let index4 =arr2.findIndex((e)=>{return.e.color==="white"})
console.log(arr2[index4])

//6. 배열에서 찾고자 하는 객체를 찾아서 해당된 객체를 리턴
const arr3 = [
  { color: "red" },
  { color: "blue" },
  { color: "yellow" },
  { color: "white" },
];

let findObject = null;
arr3.forEach((e) => {
  if (e.color === "white") {
    findObject = e;
  }
});

console.log(findObject || "찾는 객체가 없습니다.");

const findObject2 = arr3.find((e) => {
  return e.color === "white";
});
console.log(findObject2 || "찾는 객체가 없습니다.");

//7 배열에서 조건에 맞는 객체를 필터링에서 리턴
let arr4 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];
const filterarray = [];
arr4.forEach((e) => {
  if (e.hobby === "독서") {
    filterarray.push(e);
  }
});

console.log(filterarray);

console.log(
  arr4.filter((e) => {
    return e.hobby == "테니스";
  }),
);

//8. map 배열의 모든 요소를 순회하면서 새로운 배열을 생성하여 반환

let arr5 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

// 1. forEach + 전개 연산자(...)를 활용한 객체 복사 및 번호 추가
const nameArray = [];
arr5.forEach((e, index) => {
  nameArray.push({ ...e, no: `${index}` });
});
console.log(nameArray);

// 2. 값만 추출하는 map (return 생략 축약형)
console.log(arr5.map((e) => e.hobby));

// 3. 객체 형태로 추출하는 map (소괄호로 객체를 감싸는 꿀팁 적용)
console.log(arr5.map((e) => ({ hobby: e.hobby })));

//9.배열 slice
let arr6 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동1", hobby: "독서1" },
  { name: "홍길동2", hobby: "독서2" },
  { name: "홍길동3", hobby: "독서3" },
  { name: "홍길동4", hobby: "독서4" },
];

const sliceArray = arr6.slice(0, 3);
console.log(sliceArray);

//10. 배열 붙이는 방법 :  concat
let arr7 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
];

let arr8 = [
  { name: "홍길동3", hobby: "독서3" },
  { name: "홍길동4", hobby: "독서4" },
];

const concatArray = arr7.concat(arr8);
console.log(concatArray);

//11. 배열 정렬 :  sort

let arr9 = ["나", "지", "금", "졸", "려"];
const sortArray = arr9.toSorted();
const sortArray2 = arr9.toSorted().reverse();

console.log(arr9);
console.log(sortArray);
console.log(sortArray2);

console.log(arr9.sort().reverse());

//숫자 배열을 정렬하는 주의
let arr10 = [0, 1, 3, 2, 10, 30, 20];
arr10.sort();
console.log(arr10);

//12.  배열을 조인
const arr11 = ["김동진", "님", "안녕하세요", "반가워요"];
const joined = arr11.join("==");
console.log(joined);
