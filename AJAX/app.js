document.querySelector('#cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
	//objeto para obtener archivos
	const xhr = new XMLHttpRequest();
	//abrir una conexion
	xhr.open('GET', 'datos.txt', true);
	//una vez que carga
	xhr.onload = function () {
		/*status
        200 = todo esta correcto
        403 = conexxion prohibida
        404 = no se ha encontrado
        */

		if (this.status === 200) {
			document.querySelector(
				'#listado'
			).innerHTML = `<h1>${this.responseText}</h1>`;
		}
	};
	//enviar request

	xhr.send();
}
