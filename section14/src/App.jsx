// 공통 상단 헤더 컴포넌트를 불러옵니다.
import Header from "./components/Header";
// 공지사항 목록 메인 화면 컴포넌트를 불러옵니다.
import NoticeHome from "./components/NoticeHome";
// 공지사항 상세 보기 화면 컴포넌트를 불러옵니다.
import NoticeDetail from "./components/NoticeDetail";
// 공지사항 작성 및 수정 폼 컴포넌트를 불러옵니다.
import NoticeEdit from "./components/NoticeEdit";
// 애플리케이션 상태(State) 관리를 위한 React의 useState 훅을 불러옵니다.
import { useState } from "react";

// 초기화면 및 테스트용으로 사용할 기본 공지사항 더미(Mock) 데이터 배열입니다.
const mockData = [
  {
    id: 1, // 공지사항 식별자 ID
    title: "시스템 점검 안내", // 제목
    author: "관리자", // 작성자
    date: "2026-08-10", // 작성일자
    content: "안녕하세요. 정기 시스템 점검이 8월 10일에 진행될 예정입니다.", // 내용
  },
  {
    id: 2,
    title: "카카오쇼핑 이용약관 개정",
    author: "운영팀",
    date: "2026-08-07",
    content:
      "약관 개정 내용에 대해 안내해 드립니다. 자세한 내용을 확인해주세요.",
  },
];

// 최상위 App 컴포넌트 정의
function App() {
  // 공지사항 목록 데이터를 관리하는 상태입니다. 초기값으로 mockData를 설정합니다.
  const [notices, setNotices] = useState(mockData);
  // 현재 화면의 모드를 관리하는 상태입니다. ('home' | 'detail' | 'write' | 'edit')
  const [pageMode, setPageMode] = useState("home");
  // 현재 상세 보기 또는 수정 중인 공지사항의 ID를 저장하는 상태입니다.
  const [selectedId, setSelectedId] = useState(null);

  // 현재 선택된 selectedId에 해당하는 공지사항 객체를 notices 배열에서 찾아옵니다.
  const selectedNotice = notices.find((n) => n.id === selectedId);

  // 헤더의 닫기 [X] 버튼을 눌렀을 때 실행되는 핸들러 함수입니다.
  const handleClose = () => {
    // 무조건 메인 목록 화면('home')으로 돌아갑니다.
    setPageMode("home");
    // 선택된 공지사항 ID를 초기화합니다.
    setSelectedId(null);
  };

  // 헤더의 뒤로가기 [‹] 버튼을 눌렀을 때 실행되는 핸들러 함수입니다.
  const handleBack = () => {
    // 현재 수정 중('edit')이었다면 상세 페이지('detail')로 돌아갑니다.
    if (pageMode === "edit") {
      setPageMode("detail");
    } else {
      // 그 외의 경우(상세 보기, 작성 중)에는 메인 목록 화면('home')으로 이동하고 ID를 초기화합니다.
      setPageMode("home");
      setSelectedId(null);
    }
  };

  // 공지사항을 신규 작성하거나 기존 글을 수정할 때 호출되는 저장 핸들러 함수입니다.
  const handleSave = (data) => {
    // 1. 현재 화면이 수정 모드('edit')인 경우
    if (pageMode === "edit") {
      // notices 배열을 순회하며 selectedId와 일치하는 항목만 새로운 데이터(data)로 덮어씁니다.
      setNotices((prev) =>
        prev.map((item) =>
          item.id === selectedId ? { ...item, ...data } : item,
        ),
      );
      // 수정을 마치면 다시 상세 보기 페이지('detail')로 전환합니다.
      setPageMode("detail");
      // 2. 현재 화면이 작성 모드('write')인 경우
    } else if (pageMode === "write") {
      // 새로 추가할 공지사항 객체를 생성합니다.
      const newNotice = {
        id: Date.now(), // 고유한 ID 생성을 위해 현재 타임스탬프를 사용합니다.
        author: "관리자", // 작성자는 '관리자'로 기본 설정합니다.
        date: new Date().toISOString().split("T")[0], // YYYY-MM-DD 형식의 현재 날짜를 설정합니다.
        ...data, // NoticeEdit 폼에서 전달받은 title, content를 펼쳐 합칩니다.
      };
      // 기존 notices 목록의 맨 앞에 새로운 공지사항(newNotice)을 추가합니다.
      setNotices([newNotice, ...notices]);
      // 작성을 마치면 메인 목록 화면('home')으로 이동합니다.
      setPageMode("home");
    }
  };

  // 공지사항을 삭제하는 공통 처리 함수입니다. (Home 및 Detail 화면 공용)
  const handleDeleteNotice = (id) => {
    // 삭제 요청된 id와 일치하지 않는 항목들만 필터링하여 상태를 업데이트합니다.
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
    // 삭제 후 목록 화면('home')으로 돌아가고 선택 ID를 초기화합니다.
    setPageMode("home");
    setSelectedId(null);
  };

  return (
    // 전체 레이아웃을 감싸는 최상위 div 태그 및 스타일 설정
    <div
      style={{
        maxWidth: "1024px", // 최대 너비 1024px 제한
        width: "100%",
        margin: "0 auto", // 중앙 정렬
        borderLeft: "1px solid #ccc", // 좌측 테두리
        borderRight: "1px solid #ccc", // 우측 테두리
        minHeight: "100vh", // 최소 높이를 브라우저 화면 전체 높이로 설정
        boxSizing: "border-box", // 패딩과 테두리를 너비 계산에 포함
      }}
    >
      {/* 상단 공통 헤더 컴포넌트 (현재 페이지 모드와 버튼 동작 핸들러 전달) */}
      <Header pageMode={pageMode} onBack={handleBack} onClose={handleClose} />

      {/* pageMode가 'home'일 때 메인 목록 화면을 렌더링합니다. */}
      {pageMode === "home" && (
        <NoticeHome
          notices={notices} // 전체 공지사항 배열
          onSelectNotice={(id) => {
            setSelectedId(id); // 클릭한 공지 ID 설정
            setPageMode("detail"); // 상세 모드로 변경
          }}
          onGoWrite={() => setPageMode("write")} // 작성하기 클릭 시 작성 모드로 변경
          onDeleteNotice={handleDeleteNotice} // 삭제 함수 전달
        />
      )}

      {/* pageMode가 'detail'일 때 상세 보기 화면을 렌더링합니다. */}
      {pageMode === "detail" && (
        <NoticeDetail
          notice={selectedNotice} // 선택된 공지사항 객체 데이터 전달
          onGoEdit={() => setPageMode("edit")} // 수정하기 클릭 시 수정 모드로 변경
          onDelete={handleDeleteNotice} // 상세 페이지에서 삭제 실행할 핸들러 전달
        />
      )}

      {/* pageMode가 'edit' 또는 'write'일 때 폼 입력(작성/수정) 컴포넌트를 렌더링합니다. */}
      {(pageMode === "edit" || pageMode === "write") && (
        <NoticeEdit
          // 수정 모드일 때는 선택된 기존 데이터를 전달하고, 작성 모드일 때는 null을 넘깁니다.
          initialData={pageMode === "edit" ? selectedNotice : null}
          onSave={handleSave} // 저장/수정 처리 함수 전달
          onCancel={handleBack} // 취소 클릭 시 이전 화면으로 복귀하는 핸들러 전달
        />
      )}
    </div>
  );
}

// 다른 파일에서 App 컴포넌트를 기본으로 가져와 사용할 수 있도록 내보냅니다.
export default App;
