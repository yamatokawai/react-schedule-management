import React, { useState } from "react";
import Todo from "./Todo.tsx";
import { TodoList } from "../../types/index.ts";

const Todos: React.FC<TodoList[]> = () => {
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const [inputValue, setInputValue] = useState<string>(""); // inputの状態を管理

  const addTodo = () => {
    if (!inputValue.trim()) return; // 空の文字列を追加しない
    const newTodo = { id: todoList.length + 1, name: inputValue, completed: false };
    setTodoList([...todoList, newTodo]);
    setInputValue(""); // 追加後にinputをクリア
  };

  const removeTodo = () => {
    const currentTodo = todoList.filter((todo) => !todo.completed);
    setTodoList([...currentTodo]);
  };
  return (
    <div>
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
      <input
        type="text"
        value={inputValue} // inputの値を状態で制御
        onChange={(e) => setInputValue(e.target.value)} // inputの値を更新
        className="border border-black"
      />
      <button onClick={addTodo} className="border border-black">
        追加
      </button>
      <button onClick={removeTodo} className="border border-black">
        削除
      </button>
      <p>残タスク: {todoList.filter((todo) => !todo.completed).length}</p>
    </div>
  );
};

export default Todos;
