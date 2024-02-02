import Todo from "pages/Todo";
import { TasksProvider } from "contexts/TasksContext";
const App = () => {
  return (
    <div className="flex justify-center items-start bg-gray-200 py-5 h-screen">
      <TasksProvider>
        <Todo />
      </TasksProvider>
    </div>
  );
};

export default App;
