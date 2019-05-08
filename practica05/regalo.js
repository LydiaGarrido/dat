/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main() {
	let x, y, ancho, alto, diametro, color, color2;

	let min_x = 0;
	let max_x = 1000
	let min_y = 0;
	let max_y = 600;

	vjcanvas.set_coords(min_x, max_x, min_y);

	x = 500;
	y = 300;
	let radio = 500;
	let lados = 8;
	let color_borde = 'hotpink';
	let ancho_borde = 2;
	let ancho_borde2 = 1;
	let from_center = true;

	let rotacion = 0;
	let incremento_rotacion = 5;
	let hue = 204;
	let saturation = 20;
	let lightness = 100;
	let incremento_lightness = -2.0;
	let incremento_radio = .9;

	for (let rotacion = 0; rotacion <= 300; rotacion += incremento_rotacion) {
		color = vjcanvas.hsl_to_color(hue, saturation, lightness)

		vjcanvas.polygon(x, y, lados, radio, color, from_center,
			color_borde, ancho_borde, rotacion);

		lightness += incremento_lightness;
		rotacion += incremento_rotacion;
		radio *= incremento_radio;
	}

	for (let y = max_y; y >= 0; y -= radio * 6)
		for (let x = 0; x <= max_x; x += radio * 5) {
			color2 = vjcanvas.hsl_to_color(hue, saturation, lightness);
			vjcanvas.polygon(x, y, 3, radio, color, from_center,
				color_borde, ancho_borde, rotacion);
			rotacion += incremento_rotacion;
			lightness += incremento_lightness;
		}

}

main();
