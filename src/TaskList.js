import React from "react";

export default function TaskList(props) {
  let taskList = props.fullTaskList;

  if (taskList.length !== 0) {
    return (
      <div className="tasks">
        <ul>
          {taskList.map(function (taskItem, index) {
            return <li key={index}>{taskItem}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="tasks">Hooray!! You have completed all your tasks!</div>
    );
  }
}
