const texto = document
	.querySelector('#txtBtn')
	.addEventListener('click', cargarTXT);
const JSON = document
	.querySelector('#jsonBtn')
	.addEventListener('click', cargarJSON);
const api = document
	.querySelector('#apiBtn')
	.addEventListener('click', cargarAPI);

function cargarTXT() {
	const resultado = document.querySelector('#resultado');
	fetch('datos.txt')
		.then(function (res) {
			return res.text();
		})
		.then(function (data) {
			resultado.innerHTML = data;
		})
		.catch(function (error) {
			resultado.innerHTML = error;
			resultado.style.color = 'red';
		});
}

function cargarJSON() {
	const resultado = document.querySelector('#resultado');
	fetch('empleados.json')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			let html = '';
			data.forEach(function (empleado) {
				html += `
                <li><b>Empleado:</b> ${empleado.nombre} -
                <b>Puesto:</b> ${empleado.puesto}</li>
                `;
			});
			resultado.innerHTML = html;
		})
		.catch(function (error) {
			resultado.innerHTML = error;
			resultado.style.color = 'red';
		});
}

function cargarAPI() {
	const resultado = document.querySelector('#resultado');
	fetch('https://picsum.photos/list')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			let html = '';
			data.forEach(function (imagen) {
				html += `
                <li><b>id:</b> ${imagen.id}</li>
                <li><b>Formato:</b> ${imagen.format}</li>
                <li><b>Alto:</b> ${imagen.width}</li>
                <li><b>Ancho:</b> ${imagen.height}</li>
                <li><b>Nombre:</b> ${imagen.filename}</li>
                <li><b>Autor:</b> <a>${imagen.author}</li>
                <li><b>URL del Autor:</b> ${imagen.author_url}</li>
                <li><a href="${imagen.post_url}" class="img-url"><b>Ver imagen</b></a></li>
                <br>
                `;
			});
			resultado.innerHTML = html;
		})
		.catch(function (error) {
			resultado.innerHTML = error;
			resultado.style.color = 'red';
		});
}
