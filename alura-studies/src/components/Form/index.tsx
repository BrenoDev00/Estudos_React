import React from "react";
import Button from "../Button";

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(event: React.FormEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="flex flex-col  gap-4 w-[600px] bg-sky-800 rounded-md p-4"
        onSubmit={(event) => this.addTask(event)}
      >
        <div className="flex flex-col gap-2">
          <label className="text-white text-2xl" htmlFor="task">
            Adicione um novo estudo
          </label>
          <input
            className="p-2 rounded-[5px] outline-none"
            type="text"
            name="task"
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
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
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
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
