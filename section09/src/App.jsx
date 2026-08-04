import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useReducer } from "react";
import Exam from "./components/Exam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

// 1. Reducer 함수 수정
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

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 생성 핸들러
  const onCreate = (value) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: value,
        date: new Date().getTime(),
      },
    });
  };

  // 수정 핸들러 (type: "UPDATE"로 수정)
  const onUpdate = (id) => {
    dispatch({
      type: "UPDATE",
      data: id,
    });
  };

  // 삭제 핸들러
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  };

  return (
    <div className="App">
      <Header />
      <Exam />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;