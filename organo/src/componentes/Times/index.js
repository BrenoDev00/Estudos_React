import "./Time.css";

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h2 style={{color: props.corPrimaria}}>{props.nome}</h2>
    </section>
  );
};

export default Time;
