import { useState } from "react";
import "./App.css";
import { TitleComponent } from "./assets/TitleComponent";
import { ColorSelector } from "./assets/ColorSelector";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div style={{ marginTop: "-40%" }}>
        <TitleComponent color={color} />
        <ColorSelector setColor={setColor} />
      </div>
    </>
  );
}

export default App;
