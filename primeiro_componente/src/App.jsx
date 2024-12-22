import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Olá mundo</h1>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>
    </>
  );
}

export default App;
