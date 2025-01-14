function Task(props: { task: string, time: string }) {
  return (
    <li className="bg-slate-600 p-4 rounded-md">
      <h3 className="text-xl ">{props.task}</h3>
      <span className="text-xl">{props.time}</span>
    </li>
  );
}

export default Task;
