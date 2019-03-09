#!/usr/bin/nodejs

/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'
function kilometros(metros){
	return metros * 3.6;
}

function millas(metros){
	return metros * 1609.344;
}

console.log(kilometros(30));
console.log(millas(30));
