import Navigation from "./Navigation";
import Date from "./Date";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Date />
      <form className="taskForm">
        <input type="text" placeholder="Enter a Task" />
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

export default App;
