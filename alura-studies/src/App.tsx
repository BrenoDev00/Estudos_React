import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Timer } from "./components/Timer";
import { TaskInterface } from "./types/task";

function App() {
  const [task, setTask] = useState<TaskInterface[]>([]);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="flex gap-6">
        <div>
          <Form setTask={setTask} />

          <div className="mt-10">
            <Timer />
          </div>
        </div>

        <div>
          <List task={task} />
        </div>
      </div>
    </div>
  );
}

export default App;
