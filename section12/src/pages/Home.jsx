import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const year = pivotDate.getFullYear();
  const month = pivotDate.getMonth();

  // 1. 해당 월의 시작: 1일 00:00:00 (.getTime()으로 타임스탬프 변환)
  const beginTime = new Date(year, month, 1, 0, 0, 0).getTime();

  // 2. 해당 월의 끝: month + 1 의 0일 = 이번 달 마지막 날 23:59:59
  const endTime = new Date(year, month + 1, 0, 23, 59, 59).getTime();

  // 3. 필터링된 데이터
  const monthlyData = data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime,
  );

  const onIncreaseMonth = () => {
    setPivotDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1),
    );
  };

  const onDecreaseMonth = () => {
    setPivotDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1),
    );
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={`${year}년 ${month + 1}월`}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      {/* ⚠️ data 대신 필터링된 monthlyData 전달 */}
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
