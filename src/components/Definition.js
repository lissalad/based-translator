
function Definition({ word }) {
  return (
          <section className="bg-slate-100 py-3">
          <h1 className="text-2xl flex flex-col items-center">Vocabulary</h1>

          <div className=" rounded px-4 flex flex-row items-start py-4">
            <div className="flex flex-col w-fit">
              <div className="flex flex-row items-center justify-start space-x-3">
                <p className="text-2xl id={root}"> ROOT </p>
                <p>→</p>
                <h2>{word}</h2>
              </div>
              <p className="text-xs text-left indent-6 py-1 mx-5">
             DEFINITION
              </p>
            </div>
  
            <div className="">
              <img
                className="w-32"
                src={require("../images/chad.png")}
                alt="ROOT"
              />
            </div>
          </div>

        </section>
  );
}
export default Definition;