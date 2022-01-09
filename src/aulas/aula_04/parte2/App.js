import React from 'react';

export default function App() {
  const canal = () => {
    return "CFB Cursos"
  };
  function curso() {
    return "Curso de React";
  }
  return (
    <section>
      <p>Canal: {canal()}</p>
      <p>{curso()}</p>
    </section>
  );
}
