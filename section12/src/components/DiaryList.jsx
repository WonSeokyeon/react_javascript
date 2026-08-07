import "../css/DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 역정렬 로직 적용
  const getSortedData = () => {
    return [...data].sort((a, b) => {
      if (sortType === "oldest") {
        // '오래된 순' 선택 시 -> 최신순(내림차순)으로 정렬
        return Number(b.createdDate) - Number(a.createdDate);
      } else {
        // '최신순' 선택 시 -> 오래된 순(오름차순)으로 정렬
        return Number(a.createdDate) - Number(b.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
          onClick={() => nav("/new")}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
