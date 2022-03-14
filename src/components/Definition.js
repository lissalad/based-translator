function Definition({ w }) {
  // console.log(w.incel);
  return (
    <div className="flex flex-row justify-between p-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-start space-x-3 md:mx-3 m-2">
            <p className="text-2xl">{w.original}</p>
            <p>→</p>
            <p className="text-xl">{w.word}</p>
          </div>
          <p className="text-[12px] text-left py-2 w-64 w-fit mx-6" id={w.incel}>
            {w.definition}
          </p>
        </div>

          {/* <img
            className="w-20 h-20 mx-1"
            src={require("../images/chad.png")}
            alt={w.incel}
          /> */}
      </div>
  );
}
export default Definition;
