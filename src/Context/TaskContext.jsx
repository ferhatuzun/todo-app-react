/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

const TaskContext = createContext();

function Provider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [complatedTask, setComplatedTask] = useState([])
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTaskList(response.data.filter((item)=>item.complated==false));
    setComplatedTask(response.data.filter((item)=>item.complated==true));
  };
  const addTask = async (task) => {
    const newTask = {
      task,
      complated: false,
    };
    await axios.post("http://localhost:3000/tasks", newTask);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    setTaskList(taskList.filter((item) => item.id != id));
  };
  const complatedItem =  async (task)=>{
    await axios.put(`http://localhost:3000/tasks/${task.id}`,{id:task.id,task:task.task,complated:true})
  }
  const sharedVariables = {
    taskList,
    complatedTask,
    addTask,
    fetchData,
    deleteTaskById,
    complatedItem
  };
  return (
    <TaskContext.Provider value={sharedVariables}>
      {children}
    </TaskContext.Provider>
  );
}

export { Provider };
export default TaskContext;
