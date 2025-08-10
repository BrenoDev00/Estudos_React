import "./App.css";
import { Buttons } from "./components/button";
import { Autocompletes } from "./components/autocomplete";
function App() {
  return (
    <>
      <h1>Componentes do Material UI</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Buttons />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Autocompletes />
        </div>
      </div>
    </>
  );
}

export default App;
