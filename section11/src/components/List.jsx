import TodoItem from "./TodoItem";
import "../css/List.css";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  // ⭕ 객체 구조분해({ todos })가 아닌 값 자체를 가져옴
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    // todos가 초기 로딩 등으로 혹시 빈 값일 경우를 대비해 예외 처리(기본값 [])
    if (!todos) return [];

    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterTodos = getFilteredData();

  // todos가 변경될 때만 연산 수행 (search를 입력할 때는 재연산 안 함!)
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    if (!todos) return { totalCount: 0, doneCount: 0, notDoneCount: 0 };

    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    console.log(`연산 호출: total=${totalCount}, done=${doneCount}, notDone=${notDoneCount}`);
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        type="text"
        value={search}
        placeholder="검색어를 입력해주세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filterTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;