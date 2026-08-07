import "../css/Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 감정 데이터
const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

// Date 객체를 YYYY-MM-DD 포맷 문자열로 변환하는 유틸 함수
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // 수정 페이지 접근 시 초기 데이터 바인딩
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // input / textarea 입력 핸들러
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  // 작성 완료 버튼 핸들러
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      {/* 1. 날짜 선택 영역 */}
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      {/* 2. 감정 선택 영역 */}
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>

      {/* 3. 일기 작성 영역 */}
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>

      {/* 4. 버튼 영역 */}
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
