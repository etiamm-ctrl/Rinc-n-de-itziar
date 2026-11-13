/* Mi curso · 2.º Primaria · EJERCICIOS EXTRA (clasificar, escribir, ordenar)
   Cárgalo DESPUÉS de micurso.js. Usa las funciones que ya tiene tu motor:
   SORT, WRITE, BUILD, P, R, shuf. Cada tema mezcla estos ejercicios con los que ya tenía. */
(function(){var o=DATA[2];DATA[2]=function(){var D=o();
var TT={};D.S.forEach(function(s){s.T.forEach(function(t){TT[t.id]=t})});
function mixIn(id,lv,gens){var t=TT[id];if(!t||!gens.length)return;var old=t.L[lv],nw=P.apply(null,gens);t.L[lv]=function(){return R(2)?nw():old()}}
function add(id,a,b,c){[a,b,c].forEach(function(g,i){if(g)mixIn(id,i,[].concat(g))})}
var RB=["#e53935","#1e88e5","#43a047","#f2a900"];
function bins(){var a=[].slice.call(arguments);return a.map(function(x,i){return[x,RB[i]]})}
function pick(a){return a[R(a.length)]}

/* ============ CIENCIAS (como "Cortar y pegar: herbívoros, carnívoros y omnívoros") ============ */
var DIETA=[["🐄 vaca",0],["🐇 conejo",0],["🦒 jirafa",0],["🐘 elefante",0],["🐑 oveja",0],["🐴 caballo",0],
 ["🦁 león",1],["🐺 lobo",1],["🐯 tigre",1],["🦈 tiburón",1],["🦅 águila",1],["🐍 serpiente",1],
 ["🐻 oso",2],["🐖 cerdo",2],["🐔 gallina",2],["🦊 zorro",2],["🐒 mono",2],["🦝 mapache",2]];
add("e03",[SORT("¿Qué come? Clasifica el animal",bins("herbívoro 🌿","carnívoro 🥩","omnívoro 🍽️"),DIETA,6)],
 [SORT("¿Qué come? Clasifica el animal",bins("herbívoro 🌿","carnívoro 🥩","omnívoro 🍽️"),DIETA,8)],
 [SORT("¿Qué come?",bins("herbívoro 🌿","carnívoro 🥩","omnívoro 🍽️"),DIETA,9)]);
var VERT=[["🐶 perro",0],["🐟 pez",0],["🐦 pájaro",0],["🐸 rana",0],["🐍 serpiente",0],["🐴 caballo",0],
 ["🐛 oruga",1],["🕷️ araña",1],["🐌 caracol",1],["🐜 hormiga",1],["🦋 mariposa",1],["🪱 lombriz",1]];
add("e03",[SORT("¿Tiene esqueleto con huesos?",bins("vertebrado 🦴","invertebrado"),VERT,6)]);
var CLASE=[["🐶 perro",0],["🐱 gato",0],["🐋 ballena",0],["🦇 murciélago",0],["🐦 gorrión",1],["🦅 águila",1],["🐧 pingüino",1],["🦉 búho",1],
 ["🐟 atún",2],["🦈 tiburón",2],["🐠 pez payaso",2],["🐊 cocodrilo",3],["🐢 tortuga",3],["🦎 lagartija",3],["🐸 rana",4],["🦎 salamandra",4]];
add("e04",[SORT("¿Qué tipo de animal es?",bins("mamífero","ave","pez","reptil"),CLASE.filter(function(x){return x[1]<4}),6)],
 [SORT("¿Qué tipo de animal es?",bins("mamífero","ave","pez","reptil"),CLASE.filter(function(x){return x[1]<4}),8)],
 [function(){var p=pick([["🐶","perro"],["🐱","gato"],["🐟","pez"],["🐢","tortuga"],["🐸","rana"],["🦅","águila"],["🐴","caballo"],["🐍","serpiente"]]);return WRITE('<div style="font-size:3.5rem">'+p[0]+'</div>Escribe el nombre del animal',p[1])}]);
add("e05",[SORT("¿Dónde vive?",bins("en el mar 🌊","en la tierra 🌳","en el aire ☁️"),[["🐋 ballena",0],["🐙 pulpo",0],["🦀 cangrejo",0],["🐘 elefante",1],["🐇 conejo",1],["🦁 león",1],["🦅 águila",2],["🦉 búho",2],["🦋 mariposa",2]],6)]);
add("e06",[SORT("¿De qué material está hecho?",bins("madera 🪵","metal 🔩","plástico","vidrio 🪟"),[["mesa",0],["lápiz",0],["silla de madera",0],["llave",1],["cuchara",1],["olla",1],["cubo",2],["regla",2],["botella de agua",2],["vaso",3],["ventana",3],["espejo",3]],8)],
 [SORT("¿Es duro o blando?",bins("duro","blando"),[["piedra",0],["hierro",0],["madera",0],["vidrio",0],["algodón",1],["esponja",1],["lana",1],["plastilina",1]],6)]);
add("e09",[SORT("¿Dónde trabaja?",bins("hospital 🏥","escuela 🏫","tienda 🛒","calle 🚒"),[["médico",0],["enfermera",0],["maestra",1],["profesor",1],["panadero",2],["cajera",2],["bombero",3],["policía",3]],8)]);
add("e10",[SORT("¿Por dónde viaja?",bins("tierra 🛣️","mar 🌊","aire ☁️"),[["🚗 coche",0],["🚌 autobús",0],["🚂 tren",0],["🚲 bici",0],["🚢 barco",1],["⛵ velero",1],["🛥️ lancha",1],["✈️ avión",2],["🚁 helicóptero",2],["🎈 globo",2]],6)]);

/* ============ ESCRIBIR RESPUESTAS (palabras, frases y textos cortos) ============ */
var FR_EN=[["🐱","I see a cat.","I see a cat"],["🐶","I have a dog.","I have a dog"],["🐹","He has a rat.","He has a rat"],["🐔","My pet is a hen.","My pet is a hen"],["🍎","I like apples.","I like apples"],["🌞","It is sunny.","It is sunny"],["👕","I have a red T-shirt.","I have a red T-shirt"]];
function copyEN(){var p=pick(FR_EN);return WRITE('<div style="font-size:3.5rem">'+p[0]+'</div>Copy the sentence! Copia la frase:<br><b style="font-size:1.6rem">'+p[1]+'</b>',[p[1],p[2]],{lang:"en-GB",say:p[1],sayAfter:1,ph:"Write here"})}
["i05","i06","i07"].forEach(function(id){add(id,null,null,[copyEN])});
add("i03",null,[function(){var p=pick([["👩","mother"],["👨","father"],["👧","sister"],["👦","brother"],["👵","grandmother"],["👴","grandfather"]]);return WRITE('<div style="font-size:3.5rem">'+p[0]+'</div>This is my … Write the word!',p[1],{lang:"en-GB",say:"This is my "+p[1],sayAfter:1,ph:"Write here"})}]);
add("i05",[SORT("Farm or wild? Granja o salvaje",bins("farm 🚜","wild 🌴"),[["🐄 cow",0],["🐖 pig",0],["🐔 hen",0],["🐑 sheep",0],["🦁 lion",1],["🐘 elephant",1],["🐒 monkey",1],["🐯 tiger",1]],6)]);
add("i06",[SORT("Fruit or vegetable?",bins("fruit 🍎","vegetable 🥕"),[["🍎 apple",0],["🍌 banana",0],["🍊 orange",0],["🍇 grapes",0],["🥕 carrot",1],["🍅 tomato",1],["🥔 potato",1],["🌽 corn",1]],6)]);
add("i07",[SORT("Summer or winter? ¿Verano o invierno?",bins("summer ☀️","winter ❄️"),[["👙 swimsuit",0],["🩴 sandals",0],["👕 T-shirt",0],["🧢 cap",0],["🧥 coat",1],["🧣 scarf",1],["🧤 gloves",1],["🥾 boots",1]],6)]);
add("i08",[function(){var d=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],s=R(4);return BUILD("Order the days! Ordena los días",d.slice(s,s+3),"  →  ",{say:d.slice(s,s+3).join(", "),lang:"en-GB",sayAfter:1})}]);
add("v04",[SORT("Masculí o femení?",bins("masculí (el)","femení (la)"),[["pare",0],["germà",0],["avi",0],["oncle",0],["mare",1],["germana",1],["àvia",1],["tia",1]],6)]);
add("v06",[SORT("Granja o salvatge?",bins("granja 🚜","salvatge 🌴"),[["🐄 vaca",0],["🐖 porc",0],["🐔 gallina",0],["🐑 ovella",0],["🦁 lleó",1],["🐘 elefant",1],["🐒 mono",1],["🐯 tigre",1]],6)]);

/* frases cortas para escribir en Lengua (texto corto) */
add("l11",null,[function(){var p=pick([["🐶","El perro corre por el parque."],["🌞","Hoy hace sol."],["📚","Me gusta leer un libro."],["🏖️","En verano voy a la playa."],["🍊","La naranja es una fruta."]]);return WRITE('<div style="font-size:3.5rem">'+p[0]+'</div>Copia la frase con mayúscula y punto:<br><b style="font-size:1.4rem">'+p[1]+'</b>',p[1],{strict:1})}]);
return D}})();
