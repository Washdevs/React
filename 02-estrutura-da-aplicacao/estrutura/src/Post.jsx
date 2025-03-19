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

export function Contador() {
  const [count, setCount] = useState(0);

  function incrementador() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementador}>Adicionar</button>
    </div>
  );
}
