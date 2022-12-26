import { useState } from "react";
import done from "../images/done.svg";
import plus from "../images/plus.svg";
import bgImage from "../images/Rectangle 2.png";

export default function Form(props) {
  const [error, setError] = useState("");
  const { input, setInput, tasks, setTasks } = props;

  const inputVal = () => {
    if (input === "") {
      setError("Can’t be blank");
    } else {
      setError("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    inputVal();
    if (input !== "") {
      const newTask = {
        task: input,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <img src={bgImage} alt="" />
      <form className="flex relative">
        <label htmlFor="addTask"></label>
        <input
          required
          type="text"
          id="addTask"
          placeholder="note"
          className="addTask rounded-md pl-9 min-w-[250px] outline-none bg-[#EBEFF2]"
          onChange={(e) => setInput(e.target.value)}
          style={
            error !== "" ? { border: "1px solid red" } : { border: "none" }
          }
          value={input}
        />
        <p className="text-red-500 absolute top-12 text-xs">{error}</p>
        <div className="absolute bg-[#20EEB0] w-5 h-5 rounded-xl top-4 left-2  p-[5px]">
          <img src={plus} alt="" />
        </div>
        <button
          type="submit"
          className="ml-3 rounded-md bg-[#20EEB0] w-20 h-12 text-center hover:bg-emerald-400"
          onClick={submitHandler}
        >
          <img src={done} alt="" />
        </button>
      </form>
    </div>
  );
}
