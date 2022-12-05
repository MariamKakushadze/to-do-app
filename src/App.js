import Form from "./components/form";
import React, { useState } from "react";
import Todo from "./components/todo";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(["1"]);

  return (
    <div className="App flex flex-col justify-center align-middle gap-5 max-w-md bg-white rounded-md pb-10">
      <Form
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Todo tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
