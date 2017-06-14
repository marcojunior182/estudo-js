var paciente = document.querySelector("#primeiro-paciente");
var TdAltura = paciente.querySelector(".info-altura");
var TdPeso = paciente.querySelector(".info-altura");
var TdImc = paciente.querySelector(".info-imc");
var pesoEhValido = true;
var alturaEhValida = true;

var altura = TdAltura.textContent;
if(peso <= 0 || peso > 1000){
  console.log("Peso invalido.");
  TdImc.textContent = "Peso inválido";
  alturaEhValida = false;
}

var peso = TdPeso.textContent;
if (peso <=0 || altura >3 ) {
  console.log("Altura invalida");
  TdPeso.textContent = "Altura inválida";
  pesoEhValido = false;
}

if(pesoEhValido && alturaEhValida){
  var imc = peso / (altura * altura);
  TdImc.textContent = imc;
}
