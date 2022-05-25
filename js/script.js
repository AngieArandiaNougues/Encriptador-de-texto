function encriptar() {
    var ingresaTexto = document.getElementById("textareauno").value.toLowerCase();
    var cuadroResultado = ingresaTexto.replace(/e/igm, "enter");
    var cuadroResultado = cuadroResultado.replace(/o/igm, "ober");
    var cuadroResultado = cuadroResultado.replace(/i/igm, "imes");
    var cuadroResultado = cuadroResultado.replace(/a/igm, "ai");
    var cuadroResultado = cuadroResultado.replace(/u/igm, "ufat");

     
    
    document.getElementById("textareados").innerHTML = cuadroResultado; 
    document.getElementById("textareauno").value = "";
    document.getElementById("signodesaparece").style.display = 'none'
}

function desencriptar() {
    
    var ingresaTexto = document.getElementById("textareauno").value.toLowerCase();
    var cuadroResultado = ingresaTexto.replace(/enter/igm, "e");
    var cuadroResultado = cuadroResultado.replace(/ober/igm, "o");
    var cuadroResultado = cuadroResultado.replace(/imes/igm, "i");
    var cuadroResultado = cuadroResultado.replace(/ai/igm, "a");
    var cuadroResultado = cuadroResultado.replace(/ufat/igm, "u");

    
    document.getElementById("textareados").innerHTML = cuadroResultado;
    document.getElementById("textareauno").value = "";
    document.getElementById("signodesaparece").style.display = 'none'
}

function copiar() {
    var textoencriptado = document.querySelector("#textareados");
    textoencriptado.select();
    document.execCommand("copy");
    document.getElementById("textareauno").value = "";
    document.getElementById("textareados").value ="";
    location.reload()
    alert("Su mensaje ha sido copiado exitosamente")
}



function limpiar(){
    location.reload()
}

function enviarWhatsapp(){
    
    var textoencriptado = document.querySelector("#textareados");
    textoencriptado.select();
    document.execCommand("copy");
    document.getElementById("textareauno").value = "";
    document.getElementById("textareados").value ="";
        }
    




