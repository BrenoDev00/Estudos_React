import { MainTitle } from "./components/MainTitle";
import { TaskContainer } from "./components/taskContainer";

function App() {
  return (
    <div className="h-screen bg-slate-800 flex justify-center text-white items-center">
      <div className="flex flex-col gap-8">
        <MainTitle title="Lista de Tarefas" />
        <TaskContainer
          taskList={[
            "Estudar",
            "Ir ao mercado",
            "Jogar futebol",
            "Andar de skate",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
