
// ----- Fomulario
const formBostrap = document.getElementById("formBootstrap");
const elementosInput = formBostrap.querySelectorAll("input");
const motivoSelect = document.getElementById("edit_mot");
const observacionesTextarea = formBostrap.querySelector("textarea");

// ----- Validaciones
const inputName = document.getElementById("name");
const nameError = document.getElementById("nameError");
const inputSName = document.getElementById("secondName");
const secNameError = document.getElementById("secondNameError");
const inputDni = document.getElementById("dni");
const dniError = document.getElementById("dniError");
const selectMotivo = document.getElementById("edit_mot");
const motError = document.getElementById("mot_Error");
const textRemarks = document.getElementById("textRemarks");
const remarksError = document.getElementById("remarksError");
let valideForm = [false,false,false,false,false];

function validateString(dataEval){
  const regex = /^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]{3,15}$/;
  if (!regex.test(dataEval)) {
   return true;
  }else{
    return false;
  }
}

function validateName(){
  if(validateString(inputName.value)){
    nameError.style.display = "block";
    valideForm[0] = false;
  }else{
    nameError.style.display = "none";
    valideForm[0] = true;
  }
}

function validateSecName(){
  if(validateString(inputSName.value)){
    secNameError.style.display = "block";
    valideForm[1] = false;
  }else{
    secNameError.style.display = "none";
    valideForm[1] = true;
  }
}

function validateDNI(){
  if(inputDni.value < 1000000 || inputDni.value > 50000000 ){
    dniError.style.display = "block";
    valideForm[2] = false;
  }else{
    dniError.style.display = "none";
    valideForm[2] = true;
  }
}

function validateReason(){
  if(selectMotivo.value == ""){
    motError.style.display = "block";
    valideForm[3] = false;
  }else{
    motError.style.display = "none";
    valideForm[3] = true;
  }
}

function validateText(){
  if(textRemarks.value.length < 15){
    remarksError.style.display = "block";
    valideForm[4] = false;
  }else{
    remarksError.style.display = "none";
    valideForm[4] = true;
  }
}

function seeData(){
  const formValido = valideForm.filter((element)=> element == true);
  if(formValido.length == 5){
    const valores = {};
  elementosInput.forEach((input) => {
    valores[input.getAttribute("aria-label")] = input.value;
  });
  valores["Motivo"] = motivoSelect.options[motivoSelect.selectedIndex].text;
  valores["Observaciones"] = observacionesTextarea.value;

  // Muestra valores por consola.
  console.log(valores);
  }else{
    console.log("Formulario invalido");
  }
 }

 function resetForm(){
  formBostrap.reset();
 }
