import Task from "components/Task";
import useTasks from "hooks/useTasks";
import Spiner from "components/Spiner";
const TaskList = () => {
  const {
    state: { tasks, loading },
  } = useTasks();
  console.log("tasks", tasks);
  const sortedTasks = [...tasks].sort((a, b) => a.done - b.done);
  return loading ? (
    <div className="text-center">
      <Spiner />
    </div>
  ) : (
    <>
      {tasks.length === 0 ? (
        <div className="text-center text-gray-400">No tasks :)</div>
      ) : (
        <h3 className="font-bold text-xl border-b-2 border-gray-200 pb-2">
          Tasks
        </h3>
      )}
      <div
        className="flex flex-col h-[100%] overflow-y-auto"
        style={{
          scrollbarGutter: "stable both-edges",
        }}
      >
        <ul>
          {sortedTasks
            .sort((a, b) => a.done - b.done)
            .map((task, index) => (
              <Task key={task._id} task={task} index={index} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
