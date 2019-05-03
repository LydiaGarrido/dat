
/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'

function contar_cadena(pw, cadena){
  var num  = 0;

  for (var i = 0; i < cadena.length; i++) {
    for (var x = 0; x < pw.length; x++) {
      if(pw[x] == cadena[i]){
        num+=1;
      }
    }
  }
  return num;
}


function check_password(pw, longitud, min_minus, min_mayus, min_num, min_char, cadena){
  var mayusculas = 'ÁÉÍÓÚÜABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  var minusculas = 'áéíóúüabcdefghijklmnñopqrstuvwxyz';
  var numeros = '0123456789'
  var num_minusculas = contar_cadena(pw, minusculas);
  var num_mayusculas = contar_cadena(pw, mayusculas);
  var num_numeros = contar_cadena(pw, numeros);
  var num_caracteres_especiales = contar_cadena(pw, cadena);

  if (pw.length != longitud){
    return("Error: La longitug no es correcta");
  }else if (num_minusculas < min_minus){
    return("Error: El número de minúsculas no es válido");
  }else if (num_mayusculas < min_mayus){
    return("Error: El número de mayúsculas no es válido");
  }else if (num_numeros < min_num){
    return("Error: El número de números no es válido");
  }else if (num_caracteres_especiales < min_char){
    return("Error: El número de cáracteres especiales no es válido");
  }else{
    return "ok";
  }
}

function main(){

  let pw = '1234aB+?,]}';
  let longitud = 11;
  let min_minus = 1;
  let min_mayus = 1;
  let min_num = 1;
  let min_char = 1;
  let cadena = '.-{}[]!"·$%&/()=?¿¡';

  if (typeof pw != 'string'){
    return console.log("Error: la contraseña tiene que ser una cadena");
  }else if (typeof longitud != 'number'){
    return console.log("Error: la longitud tiene que ser un número");
  }else if (Math.sign(longitud) == -1){
    return console.log("Error: la longitud no puede ser negativa");
  }else if (typeof min_minus != 'number'){
    return console.log("Error: el número mínimo de minúsculas tiene que ser un número");
  }else if (Math.sign(min_minus) == -1){
    return console.log("Error: el número mímino de minúsculas no puede ser negativa");
  }else if (typeof min_mayus != 'number'){
    return console.log("Error: el número mínimo de mayúsculas tiene que ser un número");
  }else if (Math.sign(min_mayus) == -1){
    return console.log("Error: el número mímino de mayúsculas no puede ser negativa");
  }else if (typeof min_num != 'number'){
    return console.log("Error: el número mínimo de números tiene que ser un número");
  }else if (Math.sign(min_num) == -1){
    return console.log("Error: el número mímino de números no puede ser negativa");
  }else if (typeof min_char != 'number'){
    return console.log("Error: el número mínimo de cáracteres especiales tiene que ser un número");
  }else if (Math.sign(min_char) == -1){
    return console.log("Error: el número mímino de cáracteres especiales no puede ser negativa");
  }else if (typeof cadena != 'string'){
    return console.log("Error: La cadena de cáracteres especiales permitidos tiene que ser una cadena");
  }else{
    console.log(check_password(pw, longitud, min_minus, min_mayus, min_num, min_char, cadena));
  }
}

main();
