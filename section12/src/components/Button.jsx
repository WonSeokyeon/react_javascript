import "../css/button.css";

// 1. props에 type 추가 & 기본값 설정
const Button = ({ text, type , onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;