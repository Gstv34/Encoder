var check = document.getElementById("check");
check.addEventListener('click',function copiar(){
    solution.select();
    document.execCommand('copy');
});

function hiddeIlust(){
    var img = document.querySelector("#ilustration").style.visibility = "hidden";
}

function stateEnc(){
    btnEncode.classList.add("Decode");
    btnEncode.classList.remove("Encode");

    btnDecode.classList.add("Encode");
    btnDecode.classList.remove("Decode");
}

function stateDec(){
    btnDecode.classList.add("Decode");
    btnDecode.classList.remove("Encode");
    
    btnEncode.classList.add("Encode");
    btnEncode.classList.remove("Decode");
}

