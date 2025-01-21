import { TaskInterface } from "../../../types/components/Task.type";

interface Props extends TaskInterface {
  selectTask: (selectedTask: TaskInterface) => void;
}

function Task({ task, time, selected, completed, id, selectTask }: Props) {
  return (
    <li
      className={`${
        selected ? "bg-slate-900" : ""
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
      <h3 className="text-xl ">{task}</h3>
      <span className="text-xl">{time}</span>
    </li>
  );
}

export default Task;
