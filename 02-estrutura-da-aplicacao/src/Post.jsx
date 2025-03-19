import { useState } from "react";
import "./App.css";

export function Post(props) {
  return (
    <div className="componentePost">
      <strong>
        <p>{props.author}</p>
      </strong>
      <h2>{props.content}</h2>
    </div>
  );
}
