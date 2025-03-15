export function Post() {
  return <h1>Opa</h1>;
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
