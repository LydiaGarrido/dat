#!/usr/bin/nodejs

/* Lydia Garrido Muñoz
login: lgarrido */

function sleep(x) {
  if (Math.sign(x) == -1){
    return console.log("Error: los segundos no pueden ser negativos");
  }else if (typeof x != 'number'){
    return console.log("Error: el párametro no es válido");
  }
  let finish = Date.now() + (x * 1000);
  while (Date.now() - finish){
    ;
  }
}

function main() {
  console.log('Se va a hacer un sleep de 4 segundos');
  sleep(4);
  console.log('ya han pasado los 4 segundos');
}

main();
