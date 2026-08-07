import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="New">
        <Header
          title={"새 일기쓰기"}
          leftChild={
            <Button
              text={"< 뒤로가기"}
              onClick={() => {
                nav(-1);
              }}
            />
          }
        />
        <Editor name={"1"} />
      </div>
    </>
  );
};
export default New;
