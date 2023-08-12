
var slider = document.getElementById("votre_poids");
var output = document.getElementById("svalue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function calculate() {
  var poids = parseFloat(document.getElementById("votre_poids").value);
  var taille = parseFloat(document.getElementById("votre_taille").value);

  if (!isNaN(poids) && !isNaN(taille)) {
    var imc = (poids / Math.pow(taille / 100, 2)).toFixed(1);
    document.getElementById("imc_result").textContent = imc;
  } else {
    alert("Veuillez entrer des valeurs valides pour le poids et la taille.");
  }
  Showtext(imc);
}

function Showtext(valimc){
  if(valimc<18){
    document.getElementById("imc_info").textContent = "inférieur à 18,5 en sous poids";
  }
  else if (valimc>17 && valimc<26) {
    document.getElementById("imc_info").textContent = "poids normal";
  }
  else if (valimc>25 && valimc <30) {
    document.getElementById("imc_info").textContent = "il existe un surpoids ";
  }
  else if (valimc>29 && valimc <35) {
    document.getElementById("imc_info").textContent = "s’agit d’obésité modérée";
  }
  else if (valimc>34 && valimc <40) {
    document.getElementById("imc_info").textContent = "s’agit d’obésité sévère";
  }
  else if (valimc>39 && valimc <=281) {
    document.getElementById("imc_info").textContent = "s’agit d’obésité massive";
  }

  else{
      document.getElementById("imc_info").textContent = "veuillez rentrer d'autres valeurs";
  }
}

//
