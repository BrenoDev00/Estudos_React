import Task from "./Task";
import { TaskInterface } from "../../types/task.type";

function List({ task }: { task: TaskInterface[] }) {
  return (
    <aside>
      <h2 className="text-white text-2xl text-center">Estudos do dia</h2>

      <ul className="text-white flex flex-col gap-4 mt-[20px]">
        {task.map((task, index) => {
          return <Task key={index} task={task.task} time={task.time} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
