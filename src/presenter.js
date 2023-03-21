//import sumar from "./sumador";
import aRomano from "./aRomano.js";

const numero = document.querySelector("#numero");
const form = document.querySelector("#aRomano-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + aRomano(num) + "</p>";
});
