/* PININFARINA
Una semplice calcolatore secondo compito javaScript Classe_5AINFO.
Autore: M.EL HARF
Data:18/09/2024

AGGIORNAMENTO Script...
*/

// Mostra un avviso iniziale
alert(
  "Per una visualizzazione ottimale, ti preghiamo di ingrandire la pagina al 100% o utilizzare Ctrl + Scroll del mouse. \n Grazie!"
);



// Funzione comune per eseguire operazioni
function eseguiOperazione(operazione) {
  const num1 = parseFloat(document.getElementById("primo").value);
  const num2 = parseFloat(document.getElementById("Secondo").value);
  const totalSum = document.getElementById("totalSum");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Inserisci numeri validi.");
    return;
  }

  let risultato;
  switch (operazione) {
    case "addizione":
      risultato = num1 + num2;
      break;
    case "sottrazione":
      risultato = num1 - num2;
      break;
    case "moltiplicazione":
      risultato = num1 * num2;
      break;
    case "divisione":
      if (num2 === 0) {
        alert("Errore: non puoi dividere per zero.");
        return;
      }
      risultato = num1 / num2;
      break;
  }

  totalSum.innerText = risultato.toFixed(2); // Mostra risultato con 2 decimali
}

// Collegamento dei pulsanti alle operazioni
document
  .getElementById("Addizione")
  .addEventListener("click", () => eseguiOperazione("addizione"));
document
  .getElementById("Sottrazione")
  .addEventListener("click", () => eseguiOperazione("sottrazione"));
document
  .getElementById("Moltiplicazione")
  .addEventListener("click", () => eseguiOperazione("moltiplicazione"));
document
  .getElementById("Divisione")
  .addEventListener("click", () => eseguiOperazione("divisione"));

// Funzione di reset
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("primo").value = "";
  document.getElementById("Secondo").value = "";
  document.getElementById("totalSum").innerText = "0.00";
});
