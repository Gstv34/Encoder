var solution = document.getElementById("txtArea-sec");
var area = document.getElementById("txtArea-main");

const dictionary = {    
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"    };

var buton = document.getElementById("enc");
buton.addEventListener('click', function encode(){

    var text = area.value;
    var queue = ""; var flag;

     for(let i=0; i<text.length;i++){
         flag = false;
        for(const vowel in dictionary){
            if(text.charAt(i).includes(vowel)){
                queue += text.charAt(i).replace(vowel,dictionary[vowel]);
                flag = true;
                break;
            }
        }
        if(!flag){
            queue += text.charAt(i);
        } 
           
    } 
    solution.textContent = queue;
    
});




