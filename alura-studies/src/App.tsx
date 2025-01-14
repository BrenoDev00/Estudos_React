import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div>
        <Form />

        <div className="mt-[70px]">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
