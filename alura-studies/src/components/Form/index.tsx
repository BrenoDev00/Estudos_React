import React from "react";
import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <form className="flex flex-col  gap-4 w-[600px] bg-sky-800 rounded-md p-4">
        <div className="flex flex-col gap-2">
          <label className="text-white text-2xl" htmlFor="task">
            Adicione um novo estudo
          </label>
          <input
            className="p-2 rounded-[5px] outline-none"
            type="text"
            name="task"
            placeholder="O que você quer estudar"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white text-2xl" htmlFor="time">
            Tempo
          </label>
          <input
            className="p-2 rounded-[5px] outline-none"
            type="time"
            name="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Button text="Adicionar" />
      </form>
    );
  }
}

export default Form;
