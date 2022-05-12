import React from "react";

export default function PinnedTasks() {
  if (true !== 0) {
    return (
      <div className="pinnedTasks">
        <ul>
          <li>pinned tasks</li>
        </ul>
      </div>
    );
  } else {
    return <div className="pinnedTasks">You have no pinned tasks.</div>;
  }
}
