import TodoItem from "./TodoItem";
import "../css/List.css";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 1. 검색어 필터링 연산 최적화 (filterTodos)
  const filterTodos = useMemo(() => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]); // todos나 search가 변경될 때만 재계산

  // 2. 할 일 개수 분석 연산 최적화
    const [totalCount, doneCount, notDoneCount] = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return [totalCount, doneCount, notDoneCount];
  }, [todos]); // todos가 변경될 때만 재계산

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>doneCount: {doneCount}</div>
        <div>notDoneCount: {notDoneCount}</div>
      </div>
      <input
        type="text"
        value={search}
        placeholder="검색어를 입력해주세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filterTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;