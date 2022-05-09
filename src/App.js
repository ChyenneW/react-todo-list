import Navigation from "./Navigation";
import TodaysDate from "./TodaysDate";
import TaskForm from "./TaskForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <TodaysDate />
      <TaskForm />
    </div>
  );
}

export default App;
