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
                  <textarea className="taskItem">{taskItem}</textarea>
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
