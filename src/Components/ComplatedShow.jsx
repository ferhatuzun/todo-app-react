/* eslint-disable react/prop-types */
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";
const ComplatedShow = ({task}) => {
  const {deleteTaskById} = useContext(TaskContext)
  return (
    <>
      <div className="complatedCard card">
        <p>{task.task}</p>
        <div className="buttonContainer">
          <button onClick={()=>deleteTaskById(task.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ComplatedShow;
