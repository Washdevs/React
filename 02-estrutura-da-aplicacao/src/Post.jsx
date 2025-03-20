export function Post({ autor, desc }) {
  return (
    <div>
      <strong>{autor}</strong>
      <p> é o nome do {desc}</p>
    </div>
  );
}
