//Arquivo react .jsx é o arquivo que é componente. Um componente é o arquivo que contém uma função que retoran um HTML
// JSX = JavaScript + XML

import { Post, Button, Mensagem } from "./Post"; //Da biblioteca nós importamos o nome do método que vamos usar

export function App() {
  //Para listar vários componentes, é necessário colocar todos dentro de uma div
  return (
    <div>
      <Post />
      <Mensagem />
      <Button />
    </div>
  );
}
