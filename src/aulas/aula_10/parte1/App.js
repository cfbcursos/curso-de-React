import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [num, setNum] = useState(10)

  return (
    <section>
      <p>Valor do state num: {num}</p>
      <button onClick={() => setNum(num + 10)}>Soma 10</button>
    </section>
  );
}
