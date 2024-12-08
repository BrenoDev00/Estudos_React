import "./Colaborador.css";

const Colaborador = () => {
  return (
    <article className="card-colaborador">
      <div className="container-imagem-colaborador">
        <img className="imagem-colaborador"
          src="https://github.com/BrenoDev00.png"
          alt="Imagem do colaborador."
        />
      </div>

      <div className="info-colaborador">
        <h4>Breno Gonçalves</h4>
        <h5>Desenvolvedor Front-End</h5>
      </div>
    </article>
  );
};

export default Colaborador;
