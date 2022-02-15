import Down from "../icons/down";

function Translator() {
  const chunk = "flex flex-col items-start mb-5 mt-0";
  const box = "border-2 border-slate-200 h-[150px] w-72";
  const label = "ml-4 mb-1";

  return (
    <div className="flex flex-col items-center w-full justify-evenly my-5">
      <div className={chunk}>
        <label for="incel" className={label}>Incel</label>
        <textarea className={box} id="incel" name="incel" required />
      </div>

      <Down />

      <div className={chunk}>
        <p className={label}>Normie</p>
        <p className={box} />
      </div>

      <div className="">
        <button className="bg-slate-200 p-2 rounded m-7" type="submit">Translate</button>
      </div>

    </div>
  );
}

export default Translator;
