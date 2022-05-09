import React from "react";

import "./TodaysDate.css";

export default function TodaysDate() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  let date = now.getDate();
  let year = now.getFullYear();

  return (
    <div className="row date">
      <div className="col-1 dateArrows">⇐</div>
      <div className="col-5">
        <div className="day">{day}</div>
        <div className="fullDate">
          {month} {date}, {year}
        </div>
      </div>
      <div className="col-1 dateArrows">⇒</div>
    </div>
  );
}
