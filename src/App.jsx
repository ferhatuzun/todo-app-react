/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { ComplatedList } from "./Components/ComplatedList";
import { TaskCreate } from "./Components/TaskCreate";
import { TaskList } from "./Components/TaskList";
import { useContext, useEffect } from "react";
import TaskContext from "./Context/TaskContext";
function App() {
  const { taskList, complatedTask, fetchData } = useContext(TaskContext);
  useEffect(() => {
    fetchData();
  }, [taskList,complatedTask]);
  return (
    <>
      <div className="container">
        <TaskCreate />
        <TaskList />
        <ComplatedList />
      </div>
    </>
  );
}

export default App;
