const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');

boton1.addEventListener('click', function () {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'empleado.json', true);
	xhr.onload = function () {
		if (this.status === 200) {
			const persona = JSON.parse(this.responseText);
			const htmlTemplate = `
        <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Trabajo: ${persona.trabajo}</li>

        </ul>
        `;

			document.querySelector('#empleado').innerHTML = htmlTemplate;
		}
	};
	xhr.send();
});

boton2.addEventListener('click', function () {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'empleados.json', true);
	xhr.onload = function () {
		if (this.status === 200) {
			const personal = JSON.parse(this.responseText);
			let htmlTemplate = '';
			personal.forEach((persona) => {
				htmlTemplate += `
                <ul>
                        <li>ID: ${persona.id}</li>
                        <li>Nombre: ${persona.nombre}</li>
                        <li>Empresa: ${persona.empresa}</li>
                        <li>Trabajo: ${persona.trabajo}</li>
        
                </ul>
                `;
			});
			document.querySelector('#empleados').innerHTML = htmlTemplate;
		}
	};
	xhr.send();
});
