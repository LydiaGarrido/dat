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

function check_pulse(x){
  if(x == 's' or x == 'p' or x == 'r'){
    return true;
  }else{
    return false;
  }
}

function acepta_tecla(x, crono){
  if(check_pulse){
    
  }
}

function main(){

console.log('Tecla incorrecta');
console.log(acepta_tecla('x', crono));

console.log('Uso normal');
console.log(acepta_tecla('s', crono));
sleep(1.5);
console.log(acepta_tecla('s', crono));
console.log(acepta_tecla('r', crono));


console.log('Reset después de reset');
sleep(.5);
console.log(acepta_tecla('r', crono));


sleep(.5);
console.log('Uso normal con parciales');
console.log(acepta_tecla('s', crono));
sleep(1);
console.log(acepta_tecla('p', crono));
sleep(1.5);
console.log(acepta_tecla('p', crono));
sleep(1.5);
console.log(acepta_tecla('s', crono));

}
