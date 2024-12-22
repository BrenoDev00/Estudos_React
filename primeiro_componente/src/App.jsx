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
      <Subtitulo nome="Breno" idade={21} altura={1.7} />
      <button onClick={setRandomNumber}>Trocar Número</button>
    </>
  );
}

export default App;
