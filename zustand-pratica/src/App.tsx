import { useState } from "react";
import { Button } from "./shared/components/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  const decrementCount = () => setCount(0);

  return (
    <>
      <h1>Olá mundo</h1>
      <Button variant="primary" onClick={incrementCount}>
        Increment
      </Button>

      <div style={{ marginTop: "15px" }}>
        <output>count is: {count}</output>
      </div>

      <div style={{ marginTop: "15px" }}>
        <Button onClick={decrementCount}>Reset Count</Button>
      </div>
    </>
  );
}

export default App;
