import { names } from "./names.js";
import { hobbies } from "./hobbies.js";

function author() {
    const fullName = names()
    const fullHobbies = hobbies()
  return {
    fullName,
    fullHobbies
  };
}

console.log(author());
export { author }

