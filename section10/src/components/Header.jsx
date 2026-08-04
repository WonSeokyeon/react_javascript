import { memo } from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <h3>오늘의 달력📆</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
    </div>
  );
};

const mH=memo(Header)
export default mH;
