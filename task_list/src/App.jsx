import { useState } from "react";
import { MainTitle } from "./components/MainTitle";
import { TaskContainer } from "./components/taskContainer";

function App() {
  const [taskList, setTaskList] = useState([
    "Estudar",
    "Ir ao mercado",
    "Jogar futebol",
    "Andar de skate",
  ]);

  const removeTask = (task) => {
    const newTaskList = [...taskList];
    const taskIndex = newTaskList.indexOf(task);

    newTaskList.splice(taskIndex, 1);
    setTaskList(newTaskList);
  };

  return (
    <div className="h-screen bg-slate-800 flex justify-center text-white items-center">
      <div className="flex flex-col gap-8">
        <MainTitle title="Lista de Tarefas" />
        <TaskContainer taskList={taskList} removeTask={removeTask}/>
      </div>
    </div>
  );
}

export default App;
