import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Valores submetidos: ", nome, cargo, imagem);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1>Preencha os dados parar criar o card do colaborador.</h1>
        <CampoTexto
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />

        <CampoTexto
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />

        <CampoTexto
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />

        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
