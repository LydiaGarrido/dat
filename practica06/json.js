'use strict'

let personaLydia = new Object();
personaLydia.nombre = "Lydia";
personaLydia.edad = 22;
personaLydia.mascota = "Alyss";
personaLydia.ojos = "marrones";
personaLydia.altura = 1.70;
personaLydia.tiene_hermanos = false;
personaLydia.hobby = "Teatro";
personaLydia.dia_nac = 26;
personaLydia.mes_nac = 10;
personaLydia.año_nac = 1996;
personaLydia.num_favoritos = [2, 6];

let stringLydia = JSON.stringify(personaLydia);
personaLydia = JSON.parse(stringLydia);
