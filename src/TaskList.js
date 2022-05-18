import React from "react";

export default function TaskList({ fullTaskList, deleteTask }) {
  if (fullTaskList.length > 0) {
    return (
      <div className="tasks">
        <ul className="taskList">
          {fullTaskList.map(function (task, index) {
            return (
              <li className="row" key={index} id={task.taskId}>
                <div className="col-7">
                  <textarea className="taskItem" value={task.task}>
                    {task.task}
                  </textarea>
                </div>
                <div className="dropdown col-2 ">
                  <button
                    className="btn btn-secondary dropdown-toggle taskDropdown"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots" />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Pin
                      </a>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => deleteTask(task.taskId)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
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
