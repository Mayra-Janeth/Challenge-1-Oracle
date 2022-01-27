
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var boton = document.querySelector("#btn-encriptar");
var boton2 = document.querySelector("#btn-desencriptar");
var boton3 = document.querySelector("#btn-limpiar");
var boton4 = document.querySelector("#btn-limpiar2");
var copy = document.querySelector("#btn-copy");
var txt = document.querySelector("#msg");
var form = document.querySelector("#form-add");
var message = document.querySelector("#mesagge");

boton.addEventListener("click", function(){
    event.preventDefault();
    var msg = form.texto.value;
    msg= removeAccents(msg);
   
    var e = /e/gi;
    var i = /i/gi;
    var a = /a/gi;
    var o = /o/gi;
    var u = /u/gi;

    msg = msg.replace(e, "enter");
    msg = msg.replace(i, "imes");
    msg = msg.replace(a, "ai");
    msg = msg.replace(o, "ober");
    msg = msg.replace(u, "ufat");

    console.log(msg);
    txt.value = "";
    txt.value = msg;
});

boton2.addEventListener("click", function(){
    event.preventDefault();
    var msg = form.texto.value;
    var e = /enter/gi;
    var i = /imes/gi;
    var a = /ai/gi;
    var o = /ober/gi;
    var u = /ufat/gi;

    msg = msg.replace(e, "e");
    msg = msg.replace(i, "i");
    msg = msg.replace(a, "a");
    msg = msg.replace(o, "o");
    msg = msg.replace(u, "u");

    console.log(msg);
    txt.value = "";
    txt.value = msg;
});

boton3.addEventListener("click", function(){
    event.preventDefault();
    form.texto.value = "";
});

boton4.addEventListener("click", function(){
    event.preventDefault();
    txt.value = "";
});

copy.addEventListener("click", function(){
    event.preventDefault();
    var content = document.getElementById("msg");
    content.select();
    document.execCommand("copy");
    message.innerHTML = "Copiado";
    setTimeout(()=> message.innerHTML = "", 2000);
    
});

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 