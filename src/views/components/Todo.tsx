import React from "react";

const Todo: React.FC<String> = ({ todo }) => {
  const toggleCompleted = () => {
    todo.completed = !todo.completed; // チェックボックスのクリックで完了状態を切り替え
  };

  return (
    <div>
      <input
        type="checkbox" // completed 状態に応じてチェックを入れる
        onChange={toggleCompleted} // チェックボックスの状態変更時に完了状態を切り替え
      />
      {todo.name}
    </div>
  );
};

export default Todo;
