// NoticeHome 컴포넌트 전용 CSS 스타일시트를 불러옵니다.
import "./NoticeHome.css";
// 정렬 상태를 관리하기 위해 useState 훅을 불러옵니다.
import { useState } from "react";

// 공지사항 목록(notices), 상세 선택(onSelectNotice), 작성 이동(onGoWrite), 삭제(onDeleteNotice) 함수를 props로 받습니다.
const NoticeHome = ({ notices, onSelectNotice, onGoWrite, onDeleteNotice }) => {
  // 정렬 순서를 관리하는 상태입니다 (기본값: 'latest' - 최신순).
  const [sortOrder, setSortOrder] = useState("latest");

  // 긴 문자열을 자르고 뒤에 '...'을 붙여주는 유틸리티 함수입니다.
  const truncateText = (text, maxLength = 30) => {
    // 텍스트가 전달되지 않았으면 빈 문자열을 반환합니다.
    if (!text) return "";
    // 텍스트 길이가 maxLength보다 길면 자른 후 '...'을 붙이고, 짧으면 그대로 반환합니다.
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // 공지 목록에서 특정 항목의 삭제 버튼을 클릭했을 때 동작하는 함수입니다.
  const handleDelete = (e, id) => {
    // li 태그에 걸려있는 상세 조회 클릭 이벤트(onSelectNotice)가 실행되지 않도록 클릭 이벤트 전파를 중단합니다.
    e.stopPropagation();
    // 사용자 확인 컨펌창을 표시합니다.
    if (window.confirm("정말 이 공지사항을 삭제하시겠습니까?")) {
      // 확인 클릭 시 onDeleteNotice 함수에 해당 공지사항 id를 전달합니다.
      onDeleteNotice(id);
    }
  };

  // 원본 notices 배열을 보존하기 위해 스프레드 연산자([...notices])로 복사한 후 정렬을 진행합니다.
  const sortedNotices = [...notices].sort((a, b) => {
    // 비교 대상 A의 날짜를 밀리초 타임스탬프로 변환합니다.
    const dateA = new Date(a.date).getTime();
    // 비교 대상 B의 날짜를 밀리초 타임스탬프로 변환합니다.
    const dateB = new Date(b.date).getTime();

    // 정렬 조건이 'latest'(최신순)인 경우
    if (sortOrder === "latest") {
      return dateB - dateA; // 내림차순 정렬 (최신 날짜가 위로)
    } else {
      return dateA - dateB; // 오름차순 정렬 (오래된 날짜가 위로)
    }
  });

  return (
    <div className="notice-home">
      <div className="home-top">
        <div className="sort-filter">
          <select
            value={sortOrder} // 현재 정렬 상태값
            onChange={(e) => setSortOrder(e.target.value)} // 옵션 선택 시 sortOrder 상태 변경
            className="sort-select"
          >
            <option value="latest">최신순</option>
            <option value="oldest">오래된순</option>
          </select>
        </div>

        <button type="button" className="write-btn" onClick={onGoWrite}>
          공지사항 작성하기
        </button>
      </div>

      <ul className="notice-list">
        {/* 정렬된 배열(sortedNotices)을 순회하며 목록 아이템을 생성합니다. */}
        {sortedNotices.map((notice) => (
          // 개별 공지사항 카드 항목입니다. 클릭 시 해당 공지의 상세 페이지로 이동합니다.
          <li
            key={notice.id} // 리액트가 리스트 항목을 구별하기 위한 고유 Key 값
            className="notice-item"
            onClick={() => onSelectNotice(notice.id)} // 아이템 클릭 시 선택된 notice.id 전달
          >
            {/* 메인 콘텐츠를 감싸는 영역입니다. */}
            <div className="notice-item-main">
              {/* 항목의 상단 부분(제목, 작성일, 삭제버튼)입니다. */}
              <div className="notice-item-header">
                {/* 공지사항 제목입니다. */}
                <span className="notice-title">{notice.title}</span>
                {/* 날짜와 삭제 버튼이 있는 우측 영역입니다. */}
                <div className="notice-header-right">
                  {/* 작성일자를 출력합니다. */}
                  <span className="notice-date">{notice.date}</span>
                  {/* 삭제 버튼입니다. 클릭 시 상위 li의 onClick이 닿지 않게 e.stopPropagation()이 적용된 handleDelete가 동작합니다. */}
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={(e) => handleDelete(e, notice.id)}
                  >
                    삭제
                  </button>
                </div>
              </div>

              <div className="notice-item-sub">
                {/* 작성자를 출력합니다. */}
                <span className="notice-author">{notice.author}</span>

                <p className="notice-preview">
                  {truncateText(notice.content, 10)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeHome;
