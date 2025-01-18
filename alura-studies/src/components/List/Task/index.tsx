function Task(props: { task: string; time: string }) {
  return (
    <li className="bg-slate-600 px-4 py-2 rounded-md min-w-[50px] text-center">
      <h3 className="text-xl ">{props.task}</h3>
      <span className="text-xl">{props.time}</span>
    </li>
  );
}

export default Task;
