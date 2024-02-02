import ActionTypes from "data/TaskActionTypes";
import Button from "components/Button";
import { useState } from "react";
import useTasks from "hooks/useTasks";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const { dispatch } = useTasks();

  const handleAddTask = async () => {
    if (!description.trim()) return;
    try {
      const response = await fetch("/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });
      const data = await response.json();
      dispatch({ type: ActionTypes.CREATE_TASK, payload: data });
      setDescription("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-between mb-2">
      <input
        className="border border-blue-300
            rounded px-4 py-2 
            focus:outline-none focus:ring-2 
            focus:ring-blue-600 focus:border-transparent
            flex-1 mr-4"
        type="text"
        placeholder="Add a task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTask();
        }}
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default AddTask;
