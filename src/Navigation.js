import React from "react";

import "./Navigation.css";

export default function Navigation() {
  return (
    <header className="row App-header">
      <div className="col-2 active">Day</div>
      <div className="col-2">Week</div>
      <div className="col-2">Month</div>
      <div className="col-2">Year</div>
    </header>
  );
}
