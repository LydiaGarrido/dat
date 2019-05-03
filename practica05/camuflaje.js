/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'

import * as vjcanvas from "./vjcanvas.js"

function mosaico_01(lista_colores) {
	let x, y, ancho, alto, diametro, color;

	let min_x = 0;
	let max_x = 1000;
	let min_y = 0;
	let max_y = 600;
	vjcanvas.set_coords(min_x, max_x, min_y);
	console.log(lista_colores);
	diametro = 25;
	let i_color = 0; // indice color
	for (let x = -50; x <= 300; x += diametro)
		for (let y = 60; y >= -100; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * 1.5, lista_colores[i_color]);
		}
	for (let x = 100; x <= 450; x += diametro)
		for (let y = 85; y >= -100; y -= diametro * 2) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 5, diametro * 2, lista_colores[i_color]);
		}

	for (let x = 490; x <= max_x; x += diametro)
		for (let y = 60; y >= -100; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.rectangle(x, y, 10, 20, lista_colores[i_color], vjcanvas.random_color(), 15);
		}
}

function mosaico_02(lista_colores) {
	let x, y, ancho, alto, diametro, color;

	let min_x = 0;
	let max_x = 1000;
	let min_y = 0;
	let max_y = 600;
	vjcanvas.set_coords(min_x, max_x, min_y);
	console.log(lista_colores);
	diametro = 25;
	let i_color = 0; // indice color
	for (let x = -50; x <= 300; x += diametro)
		for (let y = 100; y >= 80; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * 1.5, lista_colores[i_color]);
		}
	for (let x = 100; x <= 450; x += diametro)
		for (let y = 150; y >= 130; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 5, diametro * 1.5, lista_colores[i_color]);
		}

	for (let x = 520; x <= max_x; x += diametro)
		for (let y = 100; y >= 80; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.rectangle(x, y, 10, 20, lista_colores[i_color], lista_colores[i_color], 15);
		}
}

let lista_colores01 = ['purple', 'blue', 'pink', 'yellow', 'orange', 'black', 'red', 'aquamarine'];
let lista_colores02 = ['green', 'black', 'grey'];
mosaico_01(lista_colores01);
mosaico_02(lista_colores02);
