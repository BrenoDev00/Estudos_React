import "./Colaborador.css";

const Colaborador = (props) => {
  return (
    <article className="card-colaborador">
      <div
        className="container-imagem-colaborador"
        style={{ backgroundColor: props.corDeFundo }}
      >
        <img
          className="imagem-colaborador"
          src={props.imagem}
          alt={props.nome}
        />
      </div>

      <div className="info-colaborador">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </article>
  );
};

export default Colaborador;
