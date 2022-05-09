import React, { useState } from "react";

export default function TaskForm() {
  let [loaded, setLoad] = useState("unloaded");
  let [enteredTask, setTask] = useState(null);

  function updateTask(event) {
    setTask(event.target.value);
  }

  function submitTask(event) {
    event.preventDefault();
    setLoad("loaded");
    alert(`New task Entered:${enteredTask}`);
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
        <div className="tasks">
          <ul>
            <li>task</li>
            <li>task</li>
            <li>task</li>
          </ul>
        </div>
      </div>
    );
  }
}
