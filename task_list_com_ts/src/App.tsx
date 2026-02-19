import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { taskListStore } from "./stores/task-list-store";

function App() {
  const { taskList, updateTaskList } = taskListStore();

  function handleAddTask(newTask: string) {
    const updatedTaskList = [...taskList, newTask];
    updateTaskList(updatedTaskList);
  }

  function handleRemoveTask(taskToRemove: string) {
    const taskIndexToRemove = taskList.indexOf(taskToRemove);

    taskList.splice(taskIndexToRemove, 1);

    updateTaskList(taskList);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col items-center">
      <main className="mt-[10%] w-[500px]">
        <h1 data-test="main-title" className="text-white text-3xl text-center">
          Lista de tarefas
        </h1>

        <TaskInput addTask={handleAddTask} dataTest="task-input" />

        {taskList.length > 0 && (
          <div className="mt-[30px]">
            <TaskList tasks={taskList} removeTask={handleRemoveTask} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
