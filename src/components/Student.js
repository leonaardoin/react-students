import React from "react";

import Score from "./Score";

function Student(props) {
  return (
    <div className="student">
      <div className="header">
        <h1>{props.student.name}</h1>
      </div>
      <div className="bio">
        <p>
          <span className="indent"></span>
          {props.student.bio}
        </p>
      </div>
      <table class="scores">
        <thead>
          <th>Date</th>
          <th>Score</th>
        </thead>
        {props.student.scores.map((score, idx) => (
          <Score score={score} />
        ))}
      </table>
    </div>
  );
}

export default Student;
