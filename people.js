import names from "./names.js";
import hobbies from "./hobbies.js";

function person() {
  const name = names("Francesco", "Moretti")
  const hobby = hobbies("Calcio", "SerieTV", "Videogiochi")
  return {
    fullName: name,
    hobbies: hobby,
  };
}


export default person;

