import { useState } from "react";
import { Subtitulo } from "./subtitulo";

function App() {
  const [number, setNumber] = useState(Math.random().toFixed(2));

  const setRandomNumber = () => {
    let randomNumber = Math.random().toFixed(2);
    setNumber(randomNumber);
  };

  return (
    <>
      <h1>Número Aleatório: {number}</h1>
      <Subtitulo numeroAleatorio={number} />
      <button onClick={setRandomNumber}>Trocar Número</button>
    </>
  );
}

export default App;
