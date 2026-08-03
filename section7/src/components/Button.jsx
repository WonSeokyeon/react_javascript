import React from 'react';

const Button = ({ color = "black", text = "zeus", size, children }) => {
// 이벤트 처리 함수
 const onclickButton = (event)=>{
  alert(text);
 }

  return (
    <>
      <button onClick={onclickButton} 
      style={{ color: color, width: "200px", margin: "0 auto", fontSize: size }}>
        {text} {size} {children}
      </button>
    </>
  );
};

export default Button;
