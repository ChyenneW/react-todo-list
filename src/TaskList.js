import React from "react";

export default function TaskList(props) {
  let taskList = props.fullTaskList;

  if (taskList.length !== 0) {
    return (
      <div className="tasks">
        <ul className="taskList">
          {taskList.map(function (taskItem, index) {
            return (
              <li className="row" key={index}>
                <div className="col-7">
                  <textarea>{taskItem}</textarea>
                </div>
                <div class="dropdown col-2">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots" />
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Pin
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Delete
                      </a>
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
