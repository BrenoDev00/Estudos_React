import { TaskInterface } from "../../../types/task.type";

function Task({ task, time, selected, completed, id }: TaskInterface) {
  return (
    <li className="bg-slate-600 px-4 py-2 rounded-md min-w-[50px] text-center">
      <h3 className="text-xl ">{task}</h3>
      <span className="text-xl">{time}</span>
    </li>
  );
}

export default Task;
