import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="row App-header">
        <div className="col-2 active">Day</div>
        <div className="col-2">Week</div>
        <div className="col-2">Month</div>
        <div className="col-2">Year</div>
      </header>
      <div className="row date">
        <div className="col-1">⇐</div>
        <div className="col-6">
          <div>Thursday</div>
          <div>March 23, 2017</div>
        </div>
        <div className="col-1">⇒</div>
      </div>
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
