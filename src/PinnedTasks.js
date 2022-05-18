import React from "react";

export default function PinnedTasks({ fullPinnedList, deletePinnedTask }) {
  console.log(fullPinnedList);

  if (fullPinnedList.length !== 0) {
    return (
      <div className="pinnedTasks">
        <ul>
          {fullPinnedList.map(function (task, index) {
            return (
              <li className="row" key={index} id={task.taskId}>
                <div className="col-7">
                  <textarea value={task.task}>{task.task}</textarea>
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
                      <button className="dropdown-item">Edit</button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => deletePinnedTask(task.taskId)}
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
    return <div className="pinnedTasks">You have no pinned tasks.</div>;
  }
}
