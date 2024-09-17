/* PININFARINA
Una semplice calcolatore secondo compito javaScript Classe_4AINFO.
Autore: M.EL HARF
Data:29/12/2022
*/

alert("...PRIMO SCRIPT>.... \noperazione: Addizione, \nSottrazione, \nMoltiplicazione, \nDivisione");
// Operazione di Addizione
tastoAddizione = document.getElementById("Addizione");
operazioneAddizione = function () {
  num1 = document.getElementById("primo");
  num2 = document.getElementById("Secondo");

  somma = parseInt(num1.value) + parseInt(num2.value);

  totalSum = document.getElementById("totalSum");
  totalSum.innerText = somma;
}

tastoAddizione.addEventListener("click", operazioneAddizione);

// Operazione di Sottrazione
tastoSottrazione = document.getElementById("Sottrazione");
operazioneSottrazione = function () {
  num1 = document.getElementById("primo");
  num2 = document.getElementById("Secondo");

  somma = parseInt(num1.value) - parseInt(num2.value);

  totalSum = document.getElementById("totalSum");
  totalSum.innerText = somma;
}

tastoSottrazione.addEventListener("click", operazioneSottrazione);

// Operazione di Moltiplicazione
tastoMoltiplicazione = document.getElementById("Moltiplicazione");
operazioneMoltiplicazione = function () {
  num1 = document.getElementById("primo");
  num2 = document.getElementById("Secondo");

  somma = parseInt(num1.value) * parseInt(num2.value);

  totalSum = document.getElementById("totalSum");
  totalSum.innerText = somma;
}

tastoMoltiplicazione.addEventListener("click", operazioneMoltiplicazione);

// Operazione diDivisione
tastoDivisione = document.getElementById("Divisione");
operazioneDivisione = function () {
  num1 = document.getElementById("primo");
  num2 = document.getElementById("Secondo");

  somma = parseInt(num1.value) / parseInt(num2.value);

  totalSum = document.getElementById("totalSum");
  totalSum.innerText = Math.trunc(somma);
}

tastoDivisione.addEventListener("click", operazioneDivisione);

reset.classList.remove("cancella");
/* Resettare*/
reset.addEventListener("click", () => {
  Secondo.classList.remove("red-border");
  allerta.classList.add("no-allerta");
  totalperson.innerText = "0.00";
  totalSum.innerText = "0.00";
  reset.classList.add("cancella");
})

