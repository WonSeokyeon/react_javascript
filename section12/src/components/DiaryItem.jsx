import "../css/DiaryItem.css";
import Button from "./Button";
import getEmotionImage from "../util/get-emotion-image";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  // 상세 페이지 이동 함수
  const goDetail = () => {
    nav(`/diary/${id}`);
  };

  // 수정 페이지 이동 함수
  const goEdit = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      {/* 이미지 섹션 클릭 시 상세 페이지 이동 */}
      <div className="img_section" onClick={goDetail}>
        <img src={getEmotionImage(emotionId)} alt="감정 이미지" />
      </div>

      {/* 정보 섹션 클릭 시 상세 페이지 이동 */}
      <div className="info_section" onClick={goDetail}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>

      {/* 수정 버튼 클릭 시 수정 페이지 이동 */}
      <div className="button_section">
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
