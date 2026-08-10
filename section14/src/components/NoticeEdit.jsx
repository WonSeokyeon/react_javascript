// NoticeEdit 컴포넌트 전용 CSS 스타일시트를 불러옵니다.
import "./NoticeEdit.css";
// 입력 폼 상태 관리(useState)를 위해 React의 useState 훅을 불러옵니다.
import { useState } from "react";

// initialData(수정 시 기존 데이터), 저장 함수(onSave), 취소 함수(onCancel)를 props로 전달받습니다.
const NoticeEdit = ({ initialData, onSave, onCancel }) => {
  // initialData가 존재하면 기존 제목으로, 없으면(새 글 작성 시) 빈 문자열로 제목 상태를 초기화합니다.
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  // initialData가 존재하면 기존 내용으로, 없으면 빈 문자열로 내용 상태를 초기화합니다.
  const [content, setContent] = useState(
    initialData ? initialData.content : "",
  );

  // 폼 제출(Submit) 시 실행되는 이벤트 핸들러 함수입니다.
  const handleSubmit = (e) => {
    // 폼 제출 시 페이지가 새로고침되는 브라우저 기본 동작을 막습니다.
    e.preventDefault();
    // 부모 컴포넌트로 현재 입력된 title과 content 객체를 전달하여 저장/수정을 완료합니다.
    onSave({ title, content });
  };

  return (
    // 폼 제출 시 handleSubmit 함수가 실행되도록 연결한 form 태그입니다.
    <form className="notice-edit-form" onSubmit={handleSubmit}>
      {/* 제목 입력 필드를 감싸는 그룹 영역입니다. */}
      <div className="form-group">
        {/* input과 연결되는 라벨입니다. htmlFor 속성을 통해 input의 id와 매칭합니다. */}
        <label htmlFor="notice-title">제목</label>
        {/* 제목을 입력받는 텍스트 input 엘리먼트입니다. */}
        <input
          id="notice-title" // label과 연결되는 식별자
          type="text" // 텍스트 입력 타입
          value={title} // state 변수인 title을 input 값으로 연결(제어 컴포넌트)
          onChange={(e) => setTitle(e.target.value)} // 입력값 변경 시 title 상태 업데이트
          placeholder="제목을 입력하세요" // 값이 없을 때 띄워줄 안내 문구
          required // 필수 입력 항목으로 설정
        />
      </div>
      {/* 내용 입력 필드를 감싸는 그룹 영역입니다. */}
      <div className="form-group">
        {/* textarea와 연결되는 라벨입니다. */}
        <label htmlFor="notice-content">내용</label>
        {/* 여러 줄의 본문을 입력받는 textarea 엘리먼트입니다. */}
        <textarea
          id="notice-content" // label과 연결되는 식별자
          rows="10" // 입력 창의 기본 높이(줄 수)를 10줄로 설정
          value={content} // state 변수인 content를 입력값으로 연결
          onChange={(e) => setContent(e.target.value)} // 입력값 변경 시 content 상태 업데이트
          placeholder="내용을 입력하세요" // 안내 문구
          required // 필수 입력 항목으로 설정
        />
      </div>
      {/* 하단 버튼(취소, 저장/수정)들을 감싸는 영역입니다. */}
      <div className="edit-bottom-buttons">
        {/* 클릭 시 이전 화면으로 돌아가는 onCancel 함수를 호출하는 버튼입니다. */}
        <button type="button" className="btn-cancel" onClick={onCancel}>
          취소하기
        </button>
        {/* initialData 유무에 따라 버튼 텍스트를 '수정하기' 또는 '저장하기'로 바꾸어 출력하는 제출 버튼입니다. */}
        <button type="submit" className="btn-save">
          {initialData ? "수정하기" : "저장하기"}
        </button>
      </div>
    </form>
  );
};

// 외부 파일에서 쓸 수 있도록 내보냅니다.
export default NoticeEdit;
