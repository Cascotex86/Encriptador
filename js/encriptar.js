
var resultado = document.querySelector("#resultado");
var ingresoTexto = document.querySelector("#ingresoTexto");
var imagen = document.querySelector("#muneco");
var textosImg = document.querySelector("#textosCampo2");
var botonEncriptar = document.querySelector("#botonEncriptar");
var botonDesencriptar = document.querySelector("#botonDesencriptar");



//Asignando la funcion encriptar a la funcion del boton.

function btnEncriptar(){
    var textoEncriptado = encriptar(ingresoTexto.value);
    resultado.value = textoEncriptado;
}


//Función para encriptar el texto.

function encriptar(texto){
    var codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();
    imagen.classList.add("invisible");
    textosImg.classList.add("invisible");
    
    for(var i = 0; i < codigo.length; i++){
        if(texto.includes(codigo[i][0])){
            texto = texto.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
    return texto;
}

botonEncriptar.addEventListener("click", btnEncriptar);