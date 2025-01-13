import "./ColorSelector.css";

export const ColorSelector = ({ setColor }) => {
  return (
    <section>
      <button
        className="red"
        type="button"
        onClick={() => setColor("red")}
      ></button>

      <button
        className="green"
        type="button"
        onClick={() => setColor("green")}
      ></button>

      <button
        className="blue"
        type="button"
        onClick={() => setColor("blue")}
      ></button>

      <button
        className="yellow"
        type="button"
        onClick={() => setColor("yellow")}
      ></button>
    </section>
  );
};
