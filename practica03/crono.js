/* Lydia Garrido Muñoz
login: lgarrido */

'use strict'


function sleep(x) {
	if (Math.sign(x) == -1) {
		return console.log("Error: los segundos no pueden ser negativos");
	} else if (typeof x != 'number') {
		return console.log("Error: el párametro no es válido");
	}
	let finish = Date.now() + (x * 1000);
	while (Date.now() - finish) {
		;
	}
}

function check_pulse(x) {
	if (x == 's' || x == 'p' || x == 'r') {
		return true;
	} else {
		return false;
	}
}

function pad2(number) {
	return (number < 10 ? '0' : '') + number;
}

function millisecondsToTime(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	var hours = Math.floor((milli / (1000 * 60 * 60)) % 24);
	hours = pad2(hours);
	minutes = pad2(minutes);
	seconds = pad2(seconds);
	milliseconds = pad2(milliseconds).toString();
	milliseconds = milliseconds[0] + milliseconds[1];
	if(hours > 23){
		var time = "overflow";
	}else{
		var time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
	}
	return time;
}

function acepta_tecla(x, crono, resultado) {
	console.log("tecla", x);
	if (check_pulse(x)) {
		switch (crono.state) {
			case 0:
				return pausa(x, crono, resultado);
				break;
			case 1:
				return marcha(x, crono, resultado);
				break;
			default:
				throw new RangeError("Estado desconocido:", crono.state);
		}
	} else {
		throw new RangeError("Tecla desconocida:", x);
	}
}

function reset(crono, resultado) {
	crono.state = 0;
	crono.initial_time = 0;
	resultado.display = '00:00:00:00';
	resultado.partials = [];
}

function pausa(x, crono, resultado) {
	console.log("Estado 1. Cronómetro parado");
	switch (x) {
		case ("s"):
			crono.state = 1;
			crono.initial_time = Date.now();
			break;
		case ("p"):
			break;
		case ("r"):
			reset(crono, resultado);
			break;
	}
	return resultado;
}

function marcha(x, crono, resultado) {
	console.log("Estado 2. Cronómetro en marcha");
	switch (x) {
		case ("s"):
			crono.state = 0;
			resultado.display = millisecondsToTime(Date.now() - crono.initial_time);
			break;
		case ("p"):
			crono.state = 1;
			resultado.display = millisecondsToTime(Date.now() - crono.initial_time);
			resultado.partials.push(millisecondsToTime(Date.now() - crono.initial_time));
			break;
		case ("r"):
			break;
	}
	return resultado;
}

function testCrono() {

	let crono = {
		initial_time: 0,
		state: 0,
		final_time: 0,
	}

	let resultado = {
		display: '00:00:00:00',
		partials: [],
	}

	//console.log('Tecla incorrecta');
	//console.log(acepta_tecla('x', crono));

	console.log('Uso normal');
	console.log(acepta_tecla('s', crono, resultado));
	sleep(1.5);
	console.log(acepta_tecla('s', crono, resultado));
	console.log(acepta_tecla('r', crono, resultado));


	console.log('Reset después de reset');
	sleep(.5);
	console.log(acepta_tecla('r', crono, resultado));


	sleep(.5);
	console.log('Uso normal con parciales');
	console.log(acepta_tecla('s', crono, resultado));
	sleep(1);
	console.log(acepta_tecla('p', crono, resultado));
	sleep(1.5);
	console.log(acepta_tecla('p', crono, resultado));
	sleep(1.5);
	console.log(acepta_tecla('s', crono, resultado));
}

testCrono();
