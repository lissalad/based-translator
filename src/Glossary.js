import data from "../terms";
import Definition from "./components/Definition";

function Glossary(props) {
  const words = data.map(( { title, address, images } ) => {
    return (
      <Definition
        key={title} // The title could be a key
        name={title}
        address={address}
        image={images[0]}
      />
    )
  })

  return(
    {words}
  );
}
export default Glossary;