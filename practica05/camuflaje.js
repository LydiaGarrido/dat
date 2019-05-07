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
		for (let y = 150; y >= 130; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 8, diametro * 1.5, lista_colores[i_color]);
		}
	for (let x = 200; x <= 450; x += diametro)
		for (let y = 113; y >= 105; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.dot(x, y, lista_colores[i_color], 70);
		}

	for (let x = 500; x <= max_x; x += diametro)
		for (let y = 135; y >= 85; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * 1.5, lista_colores[i_color]);
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
	for (let x = -50; x <= 300; x += diametro)
		for (let y = 200; y >= 150; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.rectangle(x, y, 20, 30, lista_colores[i_color], lista_colores[i_color], 1);
		}
	for (let x = 270; x <= 480; x += diametro)
		for (let y = 215; y >= 150; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * 1.5, lista_colores[i_color]);
		}

	for (let x = 475; x <= max_x; x += diametro)
		for (let y = 245; y >= 220; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 6, diametro * 1.5, lista_colores[i_color]);
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
	for (let x = -50; x <= 330; x += diametro)
		for (let y = 330; y >= 285; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 9, diametro * 1.5, lista_colores[i_color]);
		}

	for (let x = 410; x <= max_x; x += diametro)
		for (let y = 290; y >= 250; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.dot(x, y, lista_colores[i_color], 70);
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
	for (let x = -50; x <= 550; x += diametro)
		for (let y = 400; y >= 325; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * 1.5, lista_colores[i_color]);
		}

	for (let x = 570; x <= max_x; x += diametro)
		for (let y = 390; y >= 294; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.rectangle(x, y, 20, 30, lista_colores[i_color], lista_colores[i_color], 1);
		}
}

function mosaico_06(lista_colores) {
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
		for (let y = 520; y >= 475; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 5, diametro * 2, lista_colores[i_color]);
		}
	for (let x = 400; x <= 550; x += diametro)
		for (let y = 485; y >= 420; y -= diametro * 1.8) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.dot(x, y, lista_colores[i_color], 70);
		}

	for (let x = 580; x <= max_x; x += diametro)
		for (let y = 500; y >= 420; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.circle(x, y, diametro * 1.5, lista_colores[i_color]);
		}
}

function mosaico_07(lista_colores) {
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
		for (let y = max_y; y >= 560; y -= diametro * 1) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 8, diametro * 1.5, lista_colores[i_color]);
		}
	for (let x = 300; x <= 550; x += diametro)
		for (let y = max_y; y >= 500; y -= diametro * 1.5) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.dot(x, y, lista_colores[i_color], 50);
		}

	for (let x = 500; x <= max_x; x += diametro)
		for (let y = max_y; y >= 540; y -= diametro * 1.8) {
			i_color = Math.floor(Math.random() * lista_colores.length)
			vjcanvas.polygon(x, y, 3, diametro * 1.5, lista_colores[i_color]);
		}
}

let lista_colores01 = ['purple', 'blue', 'pink', 'yellow', 'orange', 'black', 'red', 'aquamarine'];
let lista_colores02 = ['green', 'black', 'grey'];
let lista_colores03 = ['brown', 'beige', 'lightgrey', 'moccasin'];
let lista_colores04 = ['lightskyblue', 'lightcyan', 'dodgerblue', 'blue'];
let lista_colores05 = ['hotpink', 'violet', 'pink', 'magenta'];
let lista_colores06 = ['white', 'black'];
let lista_colores07 = ['lightgreen', 'lightsalmon', 'lightseagreen', 'lightskyblue'];
mosaico_01(lista_colores01);
mosaico_02(lista_colores02);
mosaico_03(lista_colores03);
mosaico_04(lista_colores04);
mosaico_05(lista_colores05);
mosaico_06(lista_colores06);
mosaico_07(lista_colores07);
