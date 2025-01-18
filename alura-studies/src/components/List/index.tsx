import { useState } from "react";
import Task from "./Task";

function List() {
  const [task, setTask] = useState([
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "JavaScript",
      time: "01:00:00",
    },
  ]);

  return (
    <aside>
      <h2
        onClick={() => {
          setTask([...task, { name: "Estudar estado", time: "05:00:00" }]);
        }}
        className="text-white text-2xl text-center"
      >
        Estudos do dia
      </h2>

      <ul className="text-white flex flex-col gap-4 mt-[20px]">
        {task.map((task, index) => {
          return <Task key={index} task={task.name} time={task.time} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
