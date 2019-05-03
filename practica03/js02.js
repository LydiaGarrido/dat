
/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'

function kilometros(metros){
	return metros * 3.6;
}

function metroshora(metros){
	return (metros * (3600/ 1609.344));
}

function convert(metros, medida){
	if(arguments.length != 2){
		return("Error: número de argumentos incorrecto");
	}
	switch(medida){
		case('m/s'):
			return metros.toString();
		case('km/h'):
			return kilometros(metros).toString();
		case('mph'):
			return metroshora(metros).toString();
		default:
			return("Error: El segundo argumento es incorrecto");
	}
}

var velocidad = 30;
console.log(convert(velocidad, 'mph'));
console.log(convert(velocidad, 'm/s'));
console.log(convert(velocidad, 'km/h'));
console.log(convert(velocidad));
console.log(convert(velocidad, 'millas'));
