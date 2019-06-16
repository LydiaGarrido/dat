/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'

let options = {
	enableHighAccuracy: true,
	maximumAge: 0
};

function success(pos) {
	let x = pos.coords;
	let mensajePrimeraVisita;
	let datos = JSON.parse(localStorage.getItem('datos'));
	datos.latitud = x.latitude.toFixed(3);
	datos.longitud = x.longitude.toFixed(3);
	datos.aprox = x.accuracy;
	datos.fecha = new Date();
	localStorage.setItem('datos', JSON.stringify(datos));
	if (!datos.existeUsuario) {
		mensajePrimeraVisita = "Hola " + datos.nombre + ". Esta es tu primera visita. Tus coordenadas son: " + datos.latitud;
		mensajePrimeraVisita += ", " + datos.longitud + " (más o menos " + datos.aprox + " metros)";
		$("#mensajeVisita").text(mensajePrimeraVisita);
		datos.existeUsuario = true;
		localStorage.setItem('datos', JSON.stringify(datos));
	}
}

function error(err) {
	console.warn("ERROR(${err.code}): ${err.message}");
}

function getCoords() {
	navigator.geolocation.getCurrentPosition(success, error, options);
}

function register() {
	if (!localStorage.getItem('datos')){
		let input = prompt("¿Cómo te llamas?");
		let datos = {'nombre': input, 'existeUsuario': false}
		localStorage.setItem('datos', JSON.stringify(datos));
	}
}

function otherVisits() {
	let datos = JSON.parse(localStorage.getItem('datos'));
	getCoords();
	let datos_actuales = JSON.parse(localStorage.getItem('datos'));
	let mensaje = "Hola " + datos.nombre + ". Tu última visita fue con fecha " + Date(datos.fecha);
	if((datos.latitud == datos_actuales.latitud) && (datos.longitud == datos_actuales.longitud)) {
		mensaje += ", desde la misma ubicación que ahora (coordenadas " + datos.latitud;
		mensaje += ", " + datos.longitud + ", más o menos " + datos.aprox + " metros)";
	} else {
		mensaje += ", desde las coordenadas " + datos.latitud + ", " + datos.longitud + " (más o menos " + datos.aprox + " metros)";
	}
	$("#mensajeVisita").text(mensaje);
}
