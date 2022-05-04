import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Day</div>
        <div>Week</div>
        <div>Month</div>
        <div>Year</div>
      </header>
      <div>
        <div>Thursday</div>
        <div>March 23, 2017</div>
      </div>
      <form>
        <input type="text" placeholder="Enter a Task" />
      </form>
      <div>pinned tasks</div>
      <hr />
      <div>
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
