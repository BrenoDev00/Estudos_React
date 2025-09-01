import "./App.css";
import { Buttons } from "./components/button";
import { Autocompletes } from "./components/autocomplete";
import { ButtonGroups } from "./components/button-group";
import { CheckboxComponent } from "./components/checkbox";
import { SelectComponent } from "./components/select";
import { SwitchComponent } from "./components/switch";
import { AlertComponent } from "./components/alert";
import { TextFieldComponent } from "./components/text-field";
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

        <ButtonGroups />

        <CheckboxComponent />

        <SelectComponent />

        <SwitchComponent />

        <TextFieldComponent />

        <AlertComponent />
      </div>
    </>
  );
}

export default App;
