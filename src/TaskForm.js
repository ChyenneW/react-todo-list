import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskForm() {
  let [loaded, setLoad] = useState("unloaded");
  let [enteredTask, setTask] = useState(null);
  let [taskList, setTaskList] = useState([]);

  function updateTask(event) {
    setTask(event.target.value);
  }

  function addTask() {
    setTaskList([...taskList, enteredTask]);
  }

  function submitTask(event) {
    event.preventDefault();
    setLoad("loaded");
    alert(`New task Entered: ${enteredTask}`);
    addTask();
  }

  if (loaded === "unloaded") {
    return (
      <form className="taskForm" onSubmit={submitTask}>
        <input type="text" placeholder="Enter a Task" onChange={updateTask} />
      </form>
    );
  } else {
    return (
      <div>
        <form className="taskForm" onSubmit={submitTask}>
          <input type="text" placeholder="Enter a Task" onChange={updateTask} />
        </form>
        <div className="pinnedTasks">
          <ul>
            <li>pinned tasks</li>
          </ul>
        </div>
        <hr className="pageLiner" />
        <TaskList fullTaskList={taskList} />
      </div>
    );
  }
}
