import React from "react";

export default function TaskList(props) {
  let taskList = props.fullTaskList;

  if (taskList.length !== 0) {
    return (
      <div className="tasks">
        <ul className="taskList">
          {taskList.map(function (taskItem, index) {
            return (
              <li key={index}>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for={index}>
                    <span>{taskItem}</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={index}
                    value="option1"
                  />
                </div>
              </li>
            );
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
