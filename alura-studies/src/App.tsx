import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Timer } from "./components/Timer";
import { TaskInterface } from "./types/components/Task.type";

function App() {
  const [task, setTask] = useState<TaskInterface[]>([]);
  const [selectedTask, setSelectedTask] = useState<TaskInterface>();

  function selectTask(selectedTask: TaskInterface) {
    setSelectedTask(selectedTask);
    setTask((tasks) =>
      tasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="flex gap-6">
        <div>
          <Form setTask={setTask} />

          <div className="mt-10">
            <Timer selected={selectedTask} />
          </div>
        </div>

        <div>
          <List task={task} selectTask={selectTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
