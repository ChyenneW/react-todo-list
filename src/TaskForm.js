import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";

export default function TaskForm() {
  let [enteredTask, setTask] = useState(null);
  let [taskList, setTaskList] = useState([]);
  let [pinnedList, setPinnedList] = useState([]);
  let [trackPins, setTrack] = useState("untracked");

  useEffect(() => {
    console.log(localStorage.getItem("savedTaskList"));
    let loadedTaskList = JSON.parse(localStorage.getItem("savedTaskList"));

    if (loadedTaskList.length !== 0) {
      setTaskList(loadedTaskList);
    }
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("savedPinnedList"));
    let loadedPinnedList = JSON.parse(localStorage.getItem("savedPinnedList"));

    if (loadedPinnedList.length !== 0) {
      setPinnedList(loadedPinnedList);
    }
  }, [trackPins]);

  useEffect(() => {
    localStorage.setItem("savedTaskList", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("savedPinnedList", JSON.stringify(pinnedList));
    setTrack("untracked");
  }, [pinnedList]);

  function updateTask(event) {
    event.preventDefault();
    setTask(event.target.value);
  }

  function deleteTask(id) {
    let updatedList = taskList.filter((task) => task.taskId !== id);
    setTaskList(updatedList);
  }

  function deletePinnedTask(id) {
    let updatedPinnedList = pinnedList.filter((task) => task.taskId !== id);
    setPinnedList(updatedPinnedList);
  }

  function pinTask(id) {
    let pin = taskList.filter((task) => task.taskId === id);
    console.log(pin);
    let updatedList = taskList.filter((task) => task.taskId !== id);
    setPinnedList([pin, ...pinnedList]);
    setTrack("tracked");
    setTaskList(updatedList);
  }

  function submitTask(event) {
    event.preventDefault();
    let task = { task: enteredTask, taskId: `${enteredTask}-${Date.now()}` };
    setTaskList([task, ...taskList]);
    setTask("");
  }

  return (
    <div>
      <form className="taskForm" onSubmit={submitTask}>
        <input
          type="text"
          placeholder="Enter a Task"
          onChange={updateTask}
          value={enteredTask}
        />
      </form>
      <hr className="pageLiner" />
      <TaskList
        fullTaskList={taskList}
        deleteTask={deleteTask}
        pinTask={pinTask}
      />
    </div>
  );
}
