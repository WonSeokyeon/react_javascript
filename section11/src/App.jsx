import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import Exam from "./components/Exam";

const mockData = [
  { id: 0, isDone: false, content: "React 공부하기", date: new Date().getTime() },
  { id: 1, isDone: false, content: "빨래하기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "노래 연습하기", date: new Date().getTime() },
];

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.data);
    default:
      return todos;
  }
}

// 1. Context 분리 (State용 / Dispatch용)
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 2. useCallback을 적용하여 함수들이 재생성되지 않도록 고정 (의존성 배열 [])
  const onCreate = useCallback((value) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: value,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((id) => {
    dispatch({
      type: "UPDATE",
      data: id,
    });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  }, []);

  // 3. useCallback 덕분에 onCreate, onUpdate, onDelete의 참조가 유지되므로
  // MemoizedDispatch는 최초 1회만 생성되어 렌더링 최적화가 완성됩니다.
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, [onCreate, onUpdate, onDelete]);

  return (
    <div className="App">
      <Header />
      <Exam />
      {/* todos 상태 변경 시 Editor는 리렌더링되지 않도록 분리 전달 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;