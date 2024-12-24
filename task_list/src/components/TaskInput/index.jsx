export const TaskInput = ({ addTask }) => {
  let newTask = "";

  return (
    <div className="flex justify-between gap-2">
      <input
        required={true}
        onInput={(event) => (newTask = event.target.value)}
        type="text"
        className="bg-slate-600 py-1 px-2 focus:outline-none grow"
      />

      <button
        onClick={() => addTask(newTask)}
        type="button"
        className="bg-violet-900 p-2 rounded-md hover:bg-slate-600 "
      >
        Cadastrar
      </button>
    </div>
  );
};
