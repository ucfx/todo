import { useContext } from "react";
import { TasksContext } from "contexts/TasksContext";

const useTasks = () => {
  const tasksContext = useContext(TasksContext);

  if (!tasksContext) {
    throw new Error("useTasks must be used within a TasksContextProvider");
  }

  return tasksContext;
};

export default useTasks;
