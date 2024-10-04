import "../App.css";
import { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";
export const TaskCreate = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTask } = useContext(TaskContext);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    if (inputValue != "") {
      addTask(inputValue);
      setInputValue("")
    }else{
      alert("lütfen bir task giriniz.")
    }
  };
  return (
    <>
      <div id="taskCreate">
        <input
          type="text"
          placeholder="Add a new task"
          className="taskValue"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="addTaskBtn" onClick={handleClick}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </>
  );
};
