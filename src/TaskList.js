import React from "react";

export default function TaskList(props) {
  let taskList = props.fullTaskList;

  return (
    <div className="tasks">
      <ul>
        {taskList.map(function (taskItem, index) {
          return <li key={index}>{taskItem}</li>;
        })}
      </ul>
    </div>
  );
}
