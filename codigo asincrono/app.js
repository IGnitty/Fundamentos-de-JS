// // callbacks - una funcion corriendo dentro de otre funcion

// //forEach callback

// const numeros = [1, 2, 3, 4, 5];

// //inline callback - funcion anonima sin nombre - FORMA RECOMENDADA
// numeros.forEach((numero) => {
// 	console.log(numero);
// });

// //funcion definida, si tiene nombre
// // function callbackEjemplo(numero) {
// // 	console.log(numero);
// // }

// //callback definido - usa una funcion definida
// // numeros.forEach(callbackEjemplo);

// //callbacks de una api

const listaPaises = ['Francia', 'Holanda', 'Australia', 'Inglaterra'];

//se afgrega un nuevo pais despues de 2 seg

function nuevopais(pais, callback) {
	setTimeout(function () {
		listaPaises.push(pais);
		callback();
	}, 2000);
}

// los paises se muestran despues de 1 seg
function mostrarPaises() {
	setTimeout(function () {
		//callback
		let html = '';
		//callback
		listaPaises.forEach(function (pais) {
			html += `<ul>${pais}</ul>`;
			document.querySelector('#app').innerHTML = html;
		});
	}, 1000);
}

nuevopais('Alemania', mostrarPaises);

mostrarPaises();

//Promises - IMPORTANTES PARA LA FETCH API

// resolve exitoso
const esperando = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('funciono');
	}, 5000);
});

esperando.then(function (mensaje) {
	console.log(mensaje);
});

//probando el reject

const aplicarDescuento = new Promise(function (resolve, reject) {
	const descuento = false;

	if (descuento) {
		resolve('descuento aplicado');
	} else {
		reject('nel prro');
	}
});

aplicarDescuento
	.then(function (resultado) {
		console.log(resultado);
	})
	.catch(function (error) {
		console.log(error);
	});
