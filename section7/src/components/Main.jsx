let Main = ()=> {
  //지역변수
  let Number = 9;
  let obj = {name : "zeus"};
  let array = [1,2,3,4] ;
  let bool = false;
  let hobby = "베드민턴";
  let undefineValue;
  return(
    <main>
      <h3>Number = {Number}</h3>
      <h3>Number = {Number % 2 === 0 ? '짝수':'홀수'}</h3>
      {/* <h3>obj = {obj}</h3> */}
      <h3>obj.name = { obj.name }</h3>
      <h3>array = {array}</h3>
      <h3>array[2] = { array[2] }</h3>
      <h3>bool = {bool}</h3>
      <h3>hobby = {hobby}</h3>
      <h3>undefineValue = {undefineValue}</h3>
      <h3>array filter = {array.filter((e)=> e>=3)}</h3>
      <h1>Main</h1>
    </main>
  );  
}

export default Main;
