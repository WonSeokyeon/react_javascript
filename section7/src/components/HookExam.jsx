import { useState } from "react";
// import { useState } from "../hooks/useInput";

//사용자가 정의한 hooks
//1. 함수 컨포넌트에서만 사용 가능하다. (커스텀 훅 내부에서만 호출 가능)
//2. 조건부로 호출할 수 없다.
//값을 기억하는 변수, 변수를 값을 셋팅하는 함수
//사용자 정의한 Hooks
function useInput(){
  const [input, setInput] = useState('');
  const onChange = (e)=>{
    setInput(e.target.value)
  }
  return [input, onChange]
}

const HookExam = () => {
  
  //사용자 정의한 변수
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  const [input3, onChange3] = useInput();

  return (
    <>
      <div>
        <input type="text" value={input} onChange={onChange}/>
        <input type="text" value={input2} onChange={onChange2}/>
        <input type="text" value={input3} onChange={onChange3}/>
      </div>
    </>
  );
};

export default HookExam;