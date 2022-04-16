var btnDesencriptar = document.getElementById("dec");
var h2 = document.querySelector("h2");

let abc = {
a  :  "a",
e  :  "e",
i  :  "i",
o  :  "o",
u  :  "u" };

btnDesencriptar.addEventListener('click',function decode(){
    
    var cadena = (area.value != "")?area.value:solution.value;
    
        cadena = cadena.replace(/ai/gi,abc.a);
        cadena = cadena.replace(/enter/gi,abc.e);
        cadena = cadena.replace(/imes/gi,abc.i);
        cadena = cadena.replace(/ober/gi,abc.o);
        cadena = cadena.replace(/ufat/gi,abc.u);
    area.innerHTML = " ";    
    solution.innerHTML = cadena;
});

