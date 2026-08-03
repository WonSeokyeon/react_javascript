import "../css/Section.css";

const Section = () => {
  const user= {
    name : "zeus",
    isLogin : true
  };

  if (user.isLogin === true) {
    return(
    <div className="logstyle">
      {user.name} 로그아웃
    </div>
  );
  } else {
    return(
    <div className="logstyle">
      {user.name} 로그인
    </div>
    );
  }

  return(
    <section>
      <h1>SECTION</h1>
    </section>
  );
}

export default Section;