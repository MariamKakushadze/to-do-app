import React from "react";
import binIcon from "../images/delete.svg";
import plus from "../images/plus.svg";

export default function Todo(props) {
  const { tasks, setTasks } = props;

  const remove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const date = new Date();

  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  let day = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <ul className="flex flex-col gap-5 max-h-[300px] overflow-y-auto">
      {tasks.map((task, index) => (
        <li key={index} className="flex  w-[342px] flex-wrap">
          <div className="flex flex-col gap-1 m-0 ">
            <span className="m-0">{task.task || "Buy chocolates"}</span>
            <span className="text-xs text-[#888] m-0">
              {day} at {time}
            </span>
          </div>
          <div className="mr-0 flex gap-5 align-middle items-baseline relative">
            <label className="checkbox hover:cursor-pointer">
              <input
                type="checkbox"
                className="appearance-none checked:bg-[#20EEb0] bg-[#fff] w-5 h-5 rounded-xl border-[#20EEB0] border-[2px]
                "
              />
              <img
                src={plus}
                alt=""
                className="absolute top-2 left-1.5 hover:cursor-pointer"
              />
            </label>
            <button onClick={() => remove(index)}>
              <img src={binIcon} alt="" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
