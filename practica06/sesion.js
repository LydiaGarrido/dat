/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'

let primera;
let usuario = new Object();
let nombreUsuario = localStorage.getItem('nombreUsuario');
if (!nombreUsuario) {
	let input = prompt("¿Cómo te llamas?");
	localStorage.setItem('nombreUsuario', input);
	primera = true;
	usuario.fecha = new Date();
	usuario.localizacion = getCurrentPosition();
} else {
	alert("Hola " + nombreUsuario);
	primera = false;
	usuario.fecha = new Date();
	usuario.localizacion = getCurrentPosition();
}
usuario.nombre = nombreUsario;
if(primera){

}

for (let clave in localStorage) {
	let valor = localStorage[clave];
	console.log(clave + ": " + valor)
}
