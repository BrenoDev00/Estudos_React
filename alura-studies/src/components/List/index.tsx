import React from "react";

function List() {
  const tasks = [
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "JavaScript",
      time: "01:00:00",
    },
  ];

  return (
    <aside>
      <h2 className="text-white text-2xl text-center">Estudos do dia</h2>

      <ul className="text-white flex flex-col gap-4 mt-[20px]">
        {tasks.map((task, index) => {
          return (
            <li key={index} className="bg-slate-600 p-4 rounded-md">
              <h3 className="text-xl ">{task.name}</h3>
              <span className="text-xl">{task.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default List;
