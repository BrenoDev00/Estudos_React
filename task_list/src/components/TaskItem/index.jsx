export const TaskItem = ({ task, removeTask, showBorderBottom }) => {
  return (
    <article
      className={`flex gap-4 justify-between items-center ${
        showBorderBottom ? "border-b-2 border-slate-600 pb-[15px]" : ""
      }`}
    >
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
