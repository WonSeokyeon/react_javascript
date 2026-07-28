//1. data객체 생성
let date1 = new Date();
console.log(date1);

//2. Date 객체 생성
let date2 = new Date(2026, 7 - 1, 24, 16, 1, 5);
console.log(date2);

// 3. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 숫자값이기 때문에 프로젝트에 자주 사용한다.
date3 = new Date();
const ts1 = date3.getTime();
console.log(ts1); // 1718416413651



//4. 시간요소들을 추출하는 방법
let year = date1.getFullYear(); 
let month = date1.getMonth() + 1; 
let date = date1.getDate(); 
let hour = date1.getHours(); 
let minute = date1.getMinutes(); 
let seconds = date1.getSeconds(); 
console.log(year, month, date, hour, minute, seconds); 

// 5. 시간 수정하기 
date1.setFullYear(2024); 
date1.setMonth(2+1); 
date1.setDate(30); 
date1.setHours(23); 
date1.setMinutes(59); 
date1.setSeconds(59); 
console.log(date1); 

// 5. 시간을 여러 포맷으로 출력하기 
//시간은 제외하고 날짜만 출력하기 
console.log(date1.toDateString()); 