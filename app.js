let textoFinal = "";


function setTextInAside(texto){
  //Quitamos el elemento con la imagen
  const initAside = document.getElementById('initCopyContainer');
  initAside.style.display = 'none';

  //Mostramos el elemenento p con el boton de copiar
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.style.display = 'block';

  //Desplegamos el texto en el p del aside
  const textoGenerado = document.getElementById('textoGenerado');
  textoGenerado.innerHTML = texto;
}

function stringVacio(texto, botonClickeado) {
  if (texto === '') {
    alertMsj("Favor de ingresar un texto antes de dar clic al botón " + botonClickeado);
    return true;
  } else {
    return false;
  }
}

function alertMsj(texto){
  alert(texto);
}

function encriptarTexto(){
  const textoEntrada = document.getElementById('entradaTexto').value;
  textoFinal = "";
  if(!stringVacio(textoEntrada, 'encriptar')){
    // textoEntrada.toLowerCase();
    for(let i=0; i< textoEntrada.length; i++){
      textoEntrada[i] === 'a' ? textoFinal += "ai" :
      textoEntrada[i] === 'e' ? textoFinal += "enter" :
      textoEntrada[i] === 'i' ? textoFinal += "imes" :
      textoEntrada[i] === 'o' ? textoFinal += "ober" :
      textoEntrada[i] === 'u' ? textoFinal += "ufat" :
      textoFinal += textoEntrada[i];
    }

    setTextInAside(textoFinal);
  } 
}

function desencriptarTexto(){
  const textoEntrada = document.getElementById('entradaTexto').value;
  textoFinal = textoEntrada;
  if(!stringVacio(textoEntrada, 'desencriptar')){
    textoFinal = textoFinal.replace(/ai/g, 'a');
    textoFinal = textoFinal.replace(/enter/g, 'e');
    textoFinal = textoFinal.replace(/imes/g, 'i');
    textoFinal = textoFinal.replace(/ober/g, 'o');
    textoFinal = textoFinal.replace(/ufat/g, 'u');

    setTextInAside(textoFinal);
  }
}

function copiarTexto(){
  if(!stringVacio(textoFinal, 'copiar')){
    navigator.clipboard.writeText(textoFinal)
    .then(() => {
      alertMsj('Texto copiado al portapapeles');
    })
    .catch(err => {
      alertMsj('Error al copiar el texto: ', err);
    });
  }
}