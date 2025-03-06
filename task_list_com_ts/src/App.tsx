import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
 

  function addTask(newTask: string) {
    const taskList: string[] = [...tasks, newTask];
    return setTasks(taskList);
  }

  function removeTask(taskRemoved: string) {
    const taskList = [...tasks];
    const taskIndex = taskList.indexOf(taskRemoved);

    taskList.splice(taskIndex, 1);
    return setTasks(taskList);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col items-center">
      <main className="mt-[10%] w-[500px]">
        <h1 data-test="main-title" className="text-white text-3xl text-center">Lista de tarefas</h1>

        <TaskInput addTask={addTask} />

        {tasks.length > 0 && (
          <div className="mt-[30px]">
            <TaskList tasks={tasks} removeTask={removeTask} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
