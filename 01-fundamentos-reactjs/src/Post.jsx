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
} //Namer export, apenas a função

// export default Post; = Default, arquivo inteiro

//Existem Deafault export e Named export
// Default export é quando exportamos um arquivo inteiro
// Named export é quando exportamos apenas uma parte do arquivo

export function Button() {
  return <input type="button" value="Enviar" />;
}

export function Mensagem() {
  return <p>Clique No botão abaixo para enviar uma mensagem</p>;
}

export function Capslock(props) {
  const textoCapslock = props.mensagem.toUpperCase();
  return <div>{textoCapslock}</div>;
}

export function Contador() {
  const [count, setCount] = useState(0); // use state da o valor inicial e a variavel é o primeiro valor do array e o segundo é a função responsável por atualiza o valor da variável

  function incrementador() {
    setCount(count + 1); //Pode ser desta forma ou ((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementador}>Adicionar</button>
    </div>
  );
}
