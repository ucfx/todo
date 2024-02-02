import Button from "components/Button";
import useTasks from "hooks/useTasks";
import ActionTypes from "data/TaskActionTypes";
const Task = ({ task }) => {
  const { dispatch } = useTasks();

  const handleUpdate = async (_id, newData) => {
    console.log("newData", newData);
    try {
      const response = await fetch(`/api/task/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const data = await response.json();
      dispatch({
        type: ActionTypes.UPDATE_TASK,
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (_id) => {
    try {
      await fetch(`/api/task/${_id}`, {
        method: "DELETE",
      });
      dispatch({ type: ActionTypes.DELETE_TASK, payload: { _id } });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <li
      className={`${task.done ? "opacity-60" : ""} flex items-center px-3 py-1`}
    >
      <input
        className="mr-2 cursor-pointer"
        type="checkbox"
        checked={task.done}
        onChange={() => handleUpdate(task._id, { done: !task.done })}
      />
      <label
        className="flex-1 mr-2 px-2 py-1 outline-blue-500"
        onDoubleClick={(e) => {
          e.target.contentEditable = true;
          e.target.focus();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.target.contentEditable = false;
          }
        }}
        onBlur={(e) => {
          e.target.contentEditable = false;
          console.log(e.target.innerText);
          handleUpdate(task._id, { description: e.target.innerText });
        }}
      >
        {task.description}
      </label>
      <Button type="danger" onClick={() => handleDelete(task._id)}>
        Delete
      </Button>
    </li>
  );
};

export default Task;
