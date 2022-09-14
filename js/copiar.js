//boton copiar

var botonCopiar = document.querySelector("#botonCopiar");


function copiar(){
    resultado.select();
    document.execCommand("copy");
    alert("Copiado!");
}

botonCopiar.addEventListener("click", copiar);