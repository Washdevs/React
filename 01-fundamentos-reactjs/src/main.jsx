import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Createroot recebe o parametro que é o id do elemento para saber qual é o elemento raiz da página onde este caso é a rota até a div que vamos estilizar ou criar
createRoot(document.getElementById("root")).render(
  //Render usa a sintaxe do html para criar os componentes do react, semelhante as tags do html tipo <p> <div> etc
  //render esta renderizando o App
  <StrictMode>
    <App />
  </StrictMode>
);
// Então com o javascript tendo um html representado atraves da dom que vem da biblioteca "react-dom/client" o html fica dependente totalmente do javascript
// quando criamos uma aplicação SPA toda a interface é criada apartir do JavaScript,
