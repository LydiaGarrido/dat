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
	for (let x = -50; x <= max_x; x += diametro)
		for (let y = 110; y >= -100; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * (Math.random() * ((4.5 - 1) + 1)), lista_colores[i_color]);
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
	for (let x = -50; x <= max_x; x += diametro)
		for (let y = 225; y >= 125; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * (Math.random() * (2.5 - 1) + 1), lista_colores[i_color]);
		}
}

function mosaico_03(lista_colores) {
	let x, y, ancho, alto, diametro, color;

	let min_x = 0;
	let max_x = 1000;
	let min_y = 0;
	let max_y = 600;
	vjcanvas.set_coords(min_x, max_x, min_y);
	console.log(lista_colores);
	diametro = 25;
	let i_color = 0; // indice color
	for (let x = -50; x <= max_x; x += diametro)
		for (let y = 300; y >= 220; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.rectangle(x, y, 30 * (Math.random() * (5 - 1) + 1), 30 * (Math.random() * (2.5 - 1) + 1), lista_colores[i_color], lista_colores[i_color], 1);
		}
}

function mosaico_04(lista_colores) {
	let x, y, ancho, alto, diametro, color;

	let min_x = 0;
	let max_x = 1000;
	let min_y = 0;
	let max_y = 600;
	vjcanvas.set_coords(min_x, max_x, min_y);
	console.log(lista_colores);
	diametro = 25;
	let i_color = 0; // indice color
	for (let x = -50; x <= max_x; x += diametro)
		for (let y = 400; y >= 340; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			if (Math.floor(Math.random() * (1 - (-2)) + (-2))) {
				vjcanvas.rectangle(x, y, 30 * (Math.random() * (5 - 1) + 1), 30 * (Math.random() * (2.5 - 1) + 1), lista_colores[i_color]);
			} else {
				vjcanvas.circle(x, y, 30 * (Math.random() * (2.5 - 1) + 1), lista_colores[i_color]);
			}
		}
}

function mosaico_05(lista_colores) {
	let x, y, ancho, alto, diametro, color;

	let min_x = 0;
	let max_x = 1000;
	let min_y = 0;
	let max_y = 600;
	vjcanvas.set_coords(min_x, max_x, min_y);
	console.log(lista_colores);
	diametro = 25;
	let i_color = 0; // indice color
	for (let x = -50; x <= max_x; x += diametro)
		for (let y = max_y; y >= 440; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.rectangle(x, y, 30 * (Math.random() * (5 - 1) + 1), 30 * (Math.random() * (2.5 - 1) + 1), lista_colores[i_color], lista_colores[i_color], 1);
		}
}


let lista_colores01 = ['black', 'blue', 'lightskyblue'];
let lista_colores02 = ['green', 'black', 'grey'];
let lista_colores03 = ['darkgrey', 'grey', 'white'];
let lista_colores04 = ['lightgreen', 'lightsalmon', 'lightseagreen', 'lightskyblue'];
let lista_colores05 = ['black', 'white'];

mosaico_01(lista_colores01);
mosaico_02(lista_colores02);
mosaico_03(lista_colores03);
mosaico_04(lista_colores04);
mosaico_05(lista_colores05);
