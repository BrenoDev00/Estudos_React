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

  return (
    <div className="h-screen bg-slate-800 flex justify-center text-white items-center">
      <div className="flex flex-col gap-8">
        <MainTitle title="Lista de Tarefas" />
        <TaskContainer taskList={taskList} />
      </div>
    </div>
  );
}

export default App;
