import "../css/Section.css"

const Section2 = ()=> {
  //지역변수
  const user = {
    name: "zeus",
    isLogin: false,
  };

  return (
  <>
     {
      user.isLogin === true ? 
      <div className="logstyle"> {user.name} 로그아웃</div>
        : <div className="logstyle"> {user.name} 로그인</div>
      }
  </>
  );

  }

export default Section2;
