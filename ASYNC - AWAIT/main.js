// // ejemplo de asyc await

// async function obtenerClientes() {
// 	//toda funcion asincrona requiere un promise
// 	const clientes = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('clientes descargados');
// 		}, 2000);
// 	});
// 	//error o no
// 	const error = true;
// 	if (!error) {
// 		const respuesta = await clientes;
// 		return respuesta;
// 	} else {
// 		await Promise.reject('hubo un error');
// 	}
// }

// obtenerClientes()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

//Consumiendo una API de verdad con fetch api, async - await y arrow functions

async function leerTodos() {
	// Esperar la respuesta
	const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

	// cuando se hayan cargado todos los datos en la constante

	const datos = await respuesta.json();
	return datos;
}

leerTodos()
	.then((tareas) => {
		return tareas;
	})
	.then((tareas) => {
		let html = '<h2>Tareas</h2>';
		html += '<ul>';
		tareas.forEach((tarea) => {
			html += `
        <li><b>ID:<b> ${tarea.id}</li>
        <li><b>Titulo:<b> ${tarea.title}</li>
        <li><b>Status:<b> ${tarea.completed}</li>
        <br>
        `;
		});
		html += '</ul>';
		document.querySelector('#container').innerHTML = html;
	});
