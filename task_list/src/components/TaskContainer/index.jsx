import { TaskItem } from "../TaskItem";

export const TaskContainer = ({ taskList }) => {
  return (
    <main>
      <section className="border-2 border-white">
        {taskList.map((task) => (
          <TaskItem key={task} task={task} />
        ))}
      </section>
    </main>
  );
};
