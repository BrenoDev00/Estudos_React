import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario/index.js";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaborador);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
      />
    </div>
  );
}

export default App;
