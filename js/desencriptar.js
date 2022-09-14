// boton desencriptar.

function btnDesencriptar(){
    var textoDesencriptado = desencriptar(resultado.value);
    resultado.value = textoDesencriptado;
};



//funcion desencriptar.

function desencriptar(texto){
    var codigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    texto = texto.toLowerCase();
    imagen.classList.add("invisible");
    textosImg.classList.add("invisible");
    
    for(var i = 0; i < codigo.length; i++){
        if(texto.includes(codigo[i][1])){
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return texto;
};

botonDesencriptar.addEventListener("click", btnDesencriptar);