# Encriptador de texto

Pequeño encriptador de texto correspondiente a Sprint 01: Challenge Oracle One con UI inspirada en Neumorphism Design.
<br>
<p style = 'text-align:center;'>
<a href="https://gztv.github.io/encoder/">
  <img width="400px" src="./public/Encore.svg" alt="encoder">
</a>
</p>

## Cifrado
El cifrado de cada palabra corresponde a distintas equivalencias para cada vocal.

```javascript
const vowels = {    
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat" };
```
Haciendo uso de la función ```replace()``` y expresiones regulares se realiza la codificación y decodificación del texto.

