import Form from "./components/Form";
import List from "./components/List";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="flex gap-4">
        <div>
          <Form />

          <div className="mt-10">
            <Timer />
          </div>
        </div>

        <div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
