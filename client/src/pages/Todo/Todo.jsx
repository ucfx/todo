import React, { useEffect } from "react";
import TaskList from "components/TaskList";
import AddTask from "components/AddTask";

const Todo = () => {
  return (
    <div className="flex flex-col w-[500px] max-h-[100%] bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4 position-relative">
      <h1 className="text-4xl font-bold text-center mb-4 mt-4 text-blue-500">
        TodoList
      </h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Todo;
