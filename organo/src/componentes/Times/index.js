import "./Time.css";
import Colaborador from "../Colaborador/index.js"

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{color: props.corPrimaria}}>{props.nome}</h3>

      <Colaborador/>
    </section>
  );
};

export default Time;
