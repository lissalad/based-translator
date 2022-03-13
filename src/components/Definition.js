function Definition({ w }) {
  console.log(w.incel);
  return (
    <div className=" flex flex-row flex-wrap justify-between p-4">
      {/* <div className="rounded flex flex-row w-full"> */}
        <div className="flex flex-col w-fit ">
          <div className="flex flex-row items-center flex-wrap justify-start space-x-3">
            <p className="text-2xl">{w.original}</p>
            <p>→</p>
            <p className="text-xl">{w.word}</p>
          </div>
          <p className="text-xs text-left py-2 mx-1" id={w.incel}>
            {w.definition}
          </p>
        </div>

        {/* <div className=""> */}
          <img
            className="w-20"
            src={require("../images/chad.png")}
            alt="{w.incel}"
          />
        {/* </div> */}
      </div>
    // </div>
  );
}
export default Definition;
