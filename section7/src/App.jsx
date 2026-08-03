import './App.css'; 
import Viewer from './components/Viewer'; 
import Controller from './components/Controller'; 
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react'; 

function App() { 
  const [count, setCount] = useState(0); 
  const [input, setInput] = useState(''); 
  
  // 최초 마운트 여부를 추적하기 위한 Ref
  const isMount = useRef(false);

  // 1. 마운트 시점 및 count, input 업데이트 시점 감지
  useEffect(() => { 
    // 최초 마운트 시점에는 실행하지 않고 flag만 true로 전환
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    
    // 리렌더링(State 업데이트) 시에만 실행
    console.log(`Updated - count: ${count}, input: ${input}`); 
  }, [count, input]); // 의존성 배열(deps)

  // 2. 카운터 버튼 클릭 핸들러
  const onClickButton = (value) => { 
    setCount(count + value); // State 업데이트 (비동기 처리)
  }; 

  return ( 
    <div className="App"> 
      <h1>Simple Counter</h1> 
      
      <section> 
        <input 
          value={input} 
          type="text" 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="텍스트를 입력하세요"
        /> 
      </section> 

      <section> 
        <Viewer count={count} /> 
        {/* count가 짝수일 때만 Even 컴포넌트 렌더링 (필요 시) */}
        {count % 2 === 0 && <Even />}
      </section> 

      <section> 
        <Controller onClickButton={onClickButton} /> 
      </section> 
    </div> 
  ); 
}

export default App;