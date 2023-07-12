function calculate() {
  var poids = parseFloat(document.getElementById("votre_poids").value);
  var taille = parseFloat(document.getElementById("votre_taille").value);

  if (!isNaN(poids) && !isNaN(taille)) {
    var imc = (poids / Math.pow(taille / 100, 2)).toFixed(1);
    document.getElementById("imc_result").textContent = imc;
  } else {
    alert("Veuillez entrer des valeurs valides pour le poids et la taille.");
  }
}
