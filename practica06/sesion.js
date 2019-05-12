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
	localStorage.setItem('latitud', x.latitude.toFixed(3));
	localStorage.setItem('longitud', x.longitude.toFixed(3));
	localStorage.setItem('aprox', x.accuracy);
	if (!localStorage.getItem('existeUsuario')) {
		let nombre = localStorage.getItem('nombreUsuario');
		let latitud = localStorage.getItem('latitud');
		let longitud = localStorage.getItem('longitud');
		let aprox = localStorage.getItem('aprox');
		mensajePrimeraVisita = "Hola " + nombre + ". Esta es tu primera visita. Tus coordenadas son: " + latitud;
		mensajePrimeraVisita += ", " + longitud + " (más o menos " + aprox + " metros)";
		$("#mensajeVisita").text(mensajePrimeraVisita);
		localStorage.setItem('existeUsuario', true);
	}
}

function error(err) {
	console.warn("ERROR(${err.code}): ${err.message}");
};

function getCoords() {
	navigator.geolocation.getCurrentPosition(success, error, options);
	let fechaActual = new Date();
	localStorage.setItem('fecha', fechaActual);
}

function register() {
	let nombreUsuario = localStorage.getItem('nombreUsuario');
	if (!nombreUsuario) {
		let input = prompt("¿Cómo te llamas?");
		localStorage.setItem('nombreUsuario', input);
	}
}

function otherVisits() {
	let nombre = localStorage.getItem('nombreUsuario');
	let latitud = localStorage.getItem('latitud');
	let longitud = localStorage.getItem('longitud');
	let aprox = localStorage.getItem('aprox');
	let fecha = localStorage.getItem('fecha');
	getCoords();
	let latitudActual = localStorage.getItem('latitud');
	let longitudActual = localStorage.getItem('longitud');
	let mensaje = "Hola " + nombre + ". Tu última visita fue con fecha " + fecha;
	if ((latitudActual == latitud) && (longitudActual == longitud)) {
		mensaje += ", desde la misma ubicación que ahora (coordenadas " + latitud;
		mensaje += ", " + longitud + ", más o menos " + aprox + " metros)";
	} else {
		mensaje += ", desde las coordenadas " + latitud + ", " + longitud + " (más o menos " + aprox + " metros)";
	}
	$("#mensajeVisita").text(mensaje);
}
