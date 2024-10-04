import ComplatedShow from "./ComplatedShow";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";

export const ComplatedList = () => {
  const { complatedTask } = useContext(TaskContext);
  return (
    <>
      <p className="taskListTitle">Complated - {complatedTask.length}</p>
      {complatedTask.map((task, index) => {
        return <ComplatedShow key={index} task={task} />;
      })}
    </>
  );
};
