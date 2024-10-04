/* eslint-disable react/prop-types */
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";
export const TaskShow = ({task}) => {
  const {deleteTaskById,complatedItem} = useContext(TaskContext)
  
  return (
    <>
      <div className="card">
        <p>{task.task}</p>
        <div className="buttonContainer">
          <button onClick={()=>complatedItem(task)}>
            <i className="fa-solid fa-check"></i>
          </button>
          <button onClick={()=>deleteTaskById(task.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};
