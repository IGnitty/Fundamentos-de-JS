//Destructuring(los voy a meter dentro de una funcion para diferenciar las formas, no tienen nada que ver

// const cliente = {
// 	nombre: 'juan',
// 	tipo: 'silver',
// };

// // Forma vieja )
// function destructurinFormaVieja() {
// 	let nombre = cliente.nombre,
// 		tipo = cliente.tipo;

// 	console.log(nombre);
// 	console.log(tipo);
// }
// destructurinFormaVieja();

// // Forma nueva
// function destructurinFormaNueva() {
// 	let { nombre, tipo } = cliente;
// 	console.log(nombre);
// 	console.log(tipo);
// }
// destructurinFormaNueva();
// //Ambas funcionan igual, evidentemente la forma nueva es muy facil

// // destructuring a un objeto dentro de un objeto

// const usuario = {
// 	tipo: 'premium',
// 	nombre: 'Antonio',
// 	datos: {
// 		ubicacion: 'Caracas',
// 		pais: 'memezuela',
// 	},
// 	cuenta: {
// 		creacion: '01/2020',
// 		saldo: '118.000.530 Bs.S',
// 	},
// };

// let {
// 	cuenta: { saldo },
// } = usuario;

// const container = document.querySelector('.container');
// const h2 = document.createElement('h2');
// h2.appendChild(document.createTextNode(saldo));
// container.appendChild(h2);

//Destructuring a arreglos

// const paises = ['Angola', 'Qatar', 'Congo', 'Persia', { idioma: 'frances' }];

// const [primerPais, segundoPais, , ultimoPais] = paises;
// let html = `
// ${primerPais},
// ${segundoPais},
// ${ultimoPais}
// `;

// const ul = document.createElement('ul');
// ul.appendChild(document.createTextNode(html));
// ul.style.fontSize = '20';
// container.appendChild(ul);

// const persona = {
// 	tipo: 'hola',
// 	saldo: 30000,
// 	datos: {
// 		nombre: 'Pablo',
// 		apellido: 'Perez',
// 		residencia: {
// 			ciudad: 'Caracas',
// 			pais: 'Memezoelano',
// 		},
// 	},
// 	movimientos: ['01/2020', '12/2019', '27/1997'],
// };

// let {
// 	tipo,
// 	datos: {
// 		residencia: { pais },
// 	},
// 	movimientos: [uno, dos, tres],
// } = persona;

// console.log(uno);
// console.log(dos);
// console.log(tres);

//destructuring a funciones (metoddo viejo)

// function reservacion(completo, opciones) {
// 	opciones = opciones || {};
// 	let metodo = opciones.metodoPago,
// 		cantidad = opciones.cantidad,
// 		dias = opciones.dias;

// 	console.log(metodo);
// 	console.log(cantidad);
// 	console.log(dias);
// }

// reservacion(true, {
// 	metodoPago: 'tdc',
// 	cantidad: 500,
// 	dias: 3,
// });

// //destructucturing metodo nuevo

// function contratacion(status, specs) {
// 	let { servicio, diaPago, plan } = specs;

// 	console.log(servicio);
// 	console.log(diaPago);
// 	console.log(plan);
// }

// contratacion(true, {
// 	servicio: 'online',
// 	diaPago: '12',
// 	plan: 'oro',
// });

//Symbols es un nuevo tipo de dato primitivo como let - const - function

// const simbolo = Symbol();
// const simbolo2 = Symbol('descripcion');

// // console.log(simbolo2);

// let nombre = Symbol(),
// 	apellido = Symbol();
// persona = {};

// //para agregar propiedades al objeto "persona" desde nuestros symbols se encierran en corchetes

// persona[nombre] = 'juan';
// persona[apellido] = 'lmao';

// console.log(persona[nombre]);

//Sets - te permite crear una lista de valores diferentes entre si, no se puede repetir ningun dato

// let carrito = new Set();
// carrito.add('papas');
// carrito.add('tomate');
// carrito.add('cebolla');
// carrito.add('arroz');

// console.log(carrito);
// console.log(carrito.size);

// // los elementos de un set se pueden recorrer con un forEach
// // en el caso de los set los datos que contienen no poseen ndice ni id

// carrito.forEach((producto, index) => {
// 	console.log(`${index}: ${producto}`);
// });

// // Como convertir un set a arreglo

// const arregloCarrito = [...carrito];
// console.log(arregloCarrito);

// //se puede inicializar un set con valores ya preestablecidos

// let numeros = new Set([1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 4, 2, 2, 5, 42, 5, 2, 4]);

// console.log(numeros);

// // para comprobar si un dato existe dentro de un set se utiliza el metodo .has

// console.log(carrito.has('papas'));

// // para eliminar algo del set

// carrito.delete('cebolla');

// console.log(carrito);

// //parra vaciar un set

// carrito.clear();

// console.log(carrito);

//Maps

// let cliente = new Map();
// cliente.set('Nombre', 'Alfredo');
// cliente.set('Apellido', 'Rojas');
// cliente.set('Cargo', 'Dev');
// cliente.set('Saldo', '500');

// console.log(cliente);

// //para sacar un dato del map

// console.log(cliente.get('Cargo'));

// //para comprobar si un valor existe

// console.log(cliente.has('Apellido'));

// //para borrar

// cliente.delete('Saldo');
// console.log(cliente);

// //limpiar el map

// cliente.clear();
// console.log(cliente);

// // para agregar valores por defecto el map tambien evita duplicados, y siempre toma el ultimo si esta repetido

// const paciente = new Map([
// 	['nombre', 'nuevo paciente'],
// 	['cuarto', 'piso 3, ala 12, cuartos 12-124'],
// 	['comida', 'menu #10'],
// ]);

// console.log(paciente);

// //recorrer un map

// paciente.forEach((interno, index) => {
// 	console.log(`${index}: ${interno}`);
// });

//nuevos iteradores de ES6 que otrogan mas especificidad

// function iterador(carrito) {
// 	let i = 0;
// 	return {
// 		next: () => {
// 			let final = i >= carrito.length;
// 			let valorActual = !final ? carrito[i++] : undefined;

// 			return {
// 				final: final,
// 				valor: valorActual,
// 			};
// 		},
// 	};
// }

// const carrito = [
// 	'la verga',
// 	'lo otro',
// 	'aquello',
// 	'eso',
// 	'cuestion',
// 	'vaina',
// 	'cosa',
// 	'producto',
// ];

// const recorrerCarrito = iterador(carrito);
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());
// console.log(recorrerCarrito.next());

//Generadores - es una funcion que va a retornar un iterador se coloca * para indicar que sera un generador
//yield es un valor basico (int float string boolean) que se le puede asignar a un iterador, yield es us nueva sintaxis de asignacion

// function* Generador() {
// 	yield 1;
// 	yield 'nomnbre';
// 	yield true;
// }

// const iterador = Generador();

// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);

//generador que recorre un arreglo

// function* nuevoGenerador(carrito) {
// 	for (let i = 0; i < carrito.length; i++) {
// 		yield carrito[i];
// 	}
// }

// const carrito = ['1', 'prsc', '234', 'dsf', 'cfcr'];

// let iterador = nuevoGenerador(carrito);

// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);

// expresiones regulares basicas

// const expresion = new RegExp('/abc/');
// const expresion2 = /abc/;
// //ambos tipos son validos
// console.log(expresion);
// console.log(expresion2);

let valor, expReg;

expReg = /[0123456789]/;

valor = 1992;

//buscar una fecha la d ees para buscar numeros y la diagonal invertida para buscar 0 la D mayuscula busca un caracter que nno sea un numero

expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '27-09-1997';

//buscar una hora am o pm

expReg = /\d\d:\d\d \D\D/;

valor = '06:45 PM';

// para negar la expresion

expReg = /[^0123456789]/;

valor = 1124;

//sintaxis con llaves para acortar {1,2} es la cantidad de caracteres que puede tener el dia o el mes e igual para los anios

expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2020';

// evaluar letras o num la w es para sumeros o letras y el + es para evaluar una cantidad indefinida de ellas

expReg = /\w+/;
valor = 'wed';

// revisar solo mayusculas (para las minusculas es lo mismo pero en minusculas y para numeros 0-9)

expReg = /([A-Z])\w+/;
valor = 'HOLA';

console.log(expReg.test(valor));
// if (expReg.test(valor) !== true) {
// 	console.log('nel mijito');
// } else {
// 	console.log('pasele');
// }
