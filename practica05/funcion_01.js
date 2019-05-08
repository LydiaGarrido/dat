/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'

import * as vjcanvas from "./vjcanvas.js"
import * as vjcanvas2 from "./vjcanvas2.js"

let vc = {}; // virtual coordinates. Objeto global
vc.min_x = -10;
vc.max_x = 10;
vc.min_y = -20;
vc.max_y = 100;

function dibuja_ejes() {
	let color = "black";
	let grosor = 1;
	let puntos;
	puntos = [
		[vc.min_x, 0],
		[vc.max_x, 0]
	];
	vjcanvas.line(puntos, color, grosor);

	puntos = [
		[0, vc.min_y],
		[0, vc.max_y]
	];
	vjcanvas.line(puntos, color, grosor);
	return;
}


function main() {
	let corrige_ratio = false;
	vjcanvas.set_coords(vc.min_x, vc.max_x,
		vc.min_y, vc.max_y, corrige_ratio);

	let color = "black"
	let grosor = 1;
	let y;
	let incremento_x = 0.05;
	let alpha = 1;

	dibuja_ejes();

	for (let x = vc.min_x; x <= vc.max_x; x += incremento_x) {
		y = Math.exp(x);
		vjcanvas.dot(x, y, color, grosor);
		vjcanvas2.text_eje("x", 10, 480);
		vjcanvas2.text_eje("y", 510, 10);
		vjcanvas2.text_funcion("f(x) = exp(x)", 425, 50);
	}

};


main();
