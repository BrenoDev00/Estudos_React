import { useState } from "react";
import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario/index.js";
import Time from "./componentes/Times/index.js";

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
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
      <Time nome="Devops" />
      <Time nome="UX e Design" />
      <Time nome="Mobile" />
      <Time nome="Inovação e Gestão" />
    </div>
  );
}

export default App;
