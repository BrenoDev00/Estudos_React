import { Button } from "./shared/components/button";
import "./App.css";
import { useCountStore } from "./shared/stores/use-count-store";

function App() {
  const count = useCountStore((state) => state.count);

  const incrementCount = useCountStore((state) => state.incrementCount);

  const decrementCount = useCountStore((state) => state.decrementCount);

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
