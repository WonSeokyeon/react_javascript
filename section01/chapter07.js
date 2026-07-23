//함수 선어문

 
 function checkMood(mood,goodcallback,badcallback){
  if(mood==="good"){
    //Sing()
    //dance()
    goodcallback()
  }else{
    //Cry()
    badcallback()
  }
 }

 checkMood("good",()=> console.log("노래를 부르고 춤도 춘다"),()=> console.log("울고있다"),()=> console.log);

//  //함수 선언문
//  let Sing =()=> console.log("노래를 부릅니다")
//  

//  function Cry(){
//   console.log("울고있다");
//  }

//  function dance(){
//   console.log("아싸 좋아좋아좋아~ 난 흔든다");
//  }

//2. 콜백 함수 응용방법(리액트에서 최고 함수)
 function repeat (count, callback){
  for (let index = 0; index < count; index++) {
    callback(index);
    
  }
 }
 repeat(6,(idx)=>console.log("화이팅"+idx))
 repeat(4,(idx)=>console.log("하이하이"+idx*3))