// NoticeDetail 컴포넌트 전용 CSS 스타일시트를 불러옵니다.
import "./NoticeDetail.css";

// 선택된 공지사항 데이터(notice)와 수정/삭제 이벤트 핸들러(onGoEdit, onDelete)를 props로 받는 컴포넌트입니다.
const NoticeDetail = ({ notice, onGoEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("정말 이 공지사항을 삭제하시겠습니까?")) {
      onDelete(notice.id);
    }
  };

  return (
    <div className="notice-detail">
      <div className="detail-header">
        <h2>{notice.title}</h2>
        <div className="detail-meta">
          <span>작성자: {notice.author}</span>
          <span>{notice.date}</span>
        </div>
      </div>
      <div className="detail-content">
        <p>{notice.content}</p>
      </div>
      <div className="detail-bottom">
        <button type="button" className="btn-edit" onClick={onGoEdit}>
          수정하기
        </button>
        <button type="button" className="btn-delete" onClick={handleDelete}>
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default NoticeDetail;
