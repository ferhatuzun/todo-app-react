import "../App.css";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";
import { TaskShow } from "./TaskShow";
export const TaskList = () => {
  const { taskList } = useContext(TaskContext);

  return (
    <>
      <p className="taskListTitle">Tasks List - {taskList.length}</p>
      {
        taskList.map((task,index)=>{
          return <TaskShow key={index} task={task}/>

        })
      }
    </>
  );
};
