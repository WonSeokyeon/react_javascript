import "./Header.css";

const Header = ({ pageMode, onBack, onClose }) => {
  const getTitle = () => {
    switch (pageMode) {
      case "write":
        return "공지사항 작성";
      case "edit":
        return "공지사항 수정";
      case "detail":
      case "home":
      default:
        return "공지사항";
    }
  };

  return (
    <header className="notice-header">
      <div className="header-left">
        {pageMode !== "home" && (
          <button type="button" className="btn" onClick={onBack}>
            ‹
          </button>
        )}
      </div>
      <h1 className="header-title">{getTitle()}</h1>
      <div className="header-right">
        <button type="button" className="btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </header>
  );
};

export default Header;
