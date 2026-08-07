import "./../css/Viewer.css";
import getEmotionImage from "../util/get-emotion-image";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전 나쁨" },
];

const Viewer = ({ id, createdDate, content, emotionId }) => {
  // 1. 템플릿 리터럴 백틱(`)을 사용하고 세미콜론(;)으로 수정
  console.log(`emotionId = ${emotionId}`);

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId),
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_img_wrapper">
          <img src={getEmotionImage(emotionId)} alt={`감정 ${emotionId}`} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
