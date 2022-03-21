import Definition from "./Definition";

function Vocabulary({terms}){
  // console.log(terms);
  return ( 
  <>
      {terms.length !== 0 && (
        <div className="Glossary  mt-3 max-w-full overflow-x-hidden md:w-[500px] md:flex md:justify-center md:flex-col md:rounded-l md:flex-nowrap md:ml-12 md:my-7">
          <h1 className="bg-sky-200 text-xl flex flex-col items-center w-screen font-semibold py-3  md:w-full md:text-center">
            Vocabulary
          </h1>
          {terms.map((word, i) => {
            return <div className="even:bg-slate-200/60 odd:bg-slate-200/40"><Definition key={i} w={word}/> </div>;
          })}
        </div>
      )}
  </>
  );
}
export default Vocabulary