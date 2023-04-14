import React from "react";

function Score(props) {
  return (
    <tbody>
      <tr>
        <td>{props.score.date}</td>
        <td>{props.score.score}</td>
      </tr>
    </tbody>
  );
}

export default Score;
