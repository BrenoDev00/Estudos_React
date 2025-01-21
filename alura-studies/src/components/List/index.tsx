import Task from "./Task";
import { TaskInterface } from "../../types/components/Task.type";

interface Props {
  task: TaskInterface[];
  selectTask: (selectedTask: TaskInterface) => void;
}

function List({ task, selectTask }: Props) {
  return (
    <aside>
      <h2 className="text-white text-2xl text-center">Estudos do dia</h2>

      <ul className="text-white flex flex-col gap-4 mt-[20px]">
        {task.map((task) => {
          return <Task selectTask={selectTask} key={task.id} {...task} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
