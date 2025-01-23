import { TaskInterface } from "../../../types/components/Task.type";

interface Props extends TaskInterface {
  selectTask: (selectedTask: TaskInterface) => void;
}

function Task({ task, time, selected, completed, id, selectTask }: Props) {
  return (
    <li
      className={`${selected ? "bg-slate-900" : ""} ${
        completed ? "bg-green-800" : ""
      } bg-slate-600 px-4 py-2 rounded-md min-w-[50px] text-center`}
      onClick={() =>
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <div className="flex flex-col gap">
        <h3 className="text-xl ">{task}</h3>
        <span className="text-xl">{time}</span>
        {completed && <span>Tarefa completa</span>}
      </div>
    </li>
  );
}

export default Task;
