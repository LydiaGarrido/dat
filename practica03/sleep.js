#!/usr/bin/nodejs

/* Lydia Garrido Muñoz
login: lgarrido */

function sleep(milliseconds) {
  let finish = Date.now() + milliseconds;
  while (Date.now() - finish){
    ;
  }
}

function main() {
  console.log('Se va a hacer un sleep de 4 segundos');
  sleep(4000);
  console.log('ya han pasado los 4 segundos');
}

main();
