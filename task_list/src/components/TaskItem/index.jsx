export const TaskItem = ({ task, removeTask }) => {
  return (
    <article className="flex gap-4 justify-around items-center">
      <p>{task}</p>
      <button
        onClick={() => removeTask(task)}
        className="bg-slate-600 p-2 rounded-md hover:bg-violet-900"
      >
        Remover
      </button>
    </article>
  );
};
