import React, { useState, useEffect } from "react";
import PinnedTasks from "./PinnedTasks";
import TaskList from "./TaskList";

export default function TaskForm() {
  let [enteredTask, setTask] = useState(null);
  let [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("savedTaskList"));
    let loadedTaskList = JSON.parse(localStorage.getItem("savedTaskList"));

    if (loadedTaskList.length !== 0) {
      setTaskList(loadedTaskList);
    }
    console.log(loadedTaskList);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedTaskList", JSON.stringify(taskList));
  }, [taskList]);

  function updateTask(event) {
    event.preventDefault();
    setTask(event.target.value);
  }

  function addTask() {
    setTaskList([...taskList, enteredTask]);
  }

  function submitTask(event) {
    event.preventDefault();
    addTask();
  }

  return (
    <div>
      <form className="taskForm" onSubmit={submitTask}>
        <input
          type="text"
          placeholder="Enter a Task"
          onfocus=" "
          onChange={updateTask}
        />
      </form>
      <PinnedTasks />
      <hr className="pageLiner" />
      <TaskList fullTaskList={taskList} />
    </div>
  );
}
