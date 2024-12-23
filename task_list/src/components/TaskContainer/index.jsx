export const TaskContainer = ({ taskList }) => {
  return (
    <main>
      <div className="border-2 border-white">
        {taskList.map((task) => (
          <p key={task}>{task}</p>
        ))}
      </div>
    </main>
  );
};
