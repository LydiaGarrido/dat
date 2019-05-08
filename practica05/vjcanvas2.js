
export function text_eje(texto, x, y){

	var canvas = document.getElementById("mi_canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "bold 11px sans-serif";
	ctx.fillText(texto,x,y);

}

export function text_funcion(texto, x, y){

	var canvas = document.getElementById("mi_canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "bold 22px sans-serif";
	ctx.fillText(texto,x,y);

}
