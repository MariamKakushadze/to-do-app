import done from "../images/done.svg";
import plus from "../images/plus.svg";
import bgImage from "../images/Rectangle 2.png";

export default function Form() {
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
        />
        <div className="absolute bg-[#20EEB0] w-5 h-5 rounded-xl top-4 left-2  p-[5px]">
          <img src={plus} alt="" />
        </div>
        <button
          type="submit"
          className="ml-3 rounded-md bg-[#20EEB0] w-20 h-12 text-center"
        >
          <img src={done} alt="" />
        </button>
      </form>
    </div>
  );
}
