import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    // 1. data가 아직 로드되지 않았으면 실행하지 않음
    if (!data || data.length === 0) return;

    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id),
    );

    // 2. 일기를 찾지 못한 경우 (경고 후 이동)
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
      return;
    }

    // 3. ⚠️ 핵심 수정: 기존 값과 새로 찾은 값이 다를 때만 setState 실행! (무한 리렌더링 방지)
    if (JSON.stringify(curDiaryItem) !== JSON.stringify(currentDiaryItem)) {
      setCurDiaryItem(currentDiaryItem);
    }
  }, [params.id, data, curDiaryItem, nav]); // ⚠️ 의존성 배열에 curDiaryItem, nav 추가

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(Number(params.id));
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        Number(params.id),
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  // curDiaryItem이 없을 때는 로딩 화면 출력
  if (!curDiaryItem) {
    return <div>일기를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
