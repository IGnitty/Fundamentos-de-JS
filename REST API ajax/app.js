const boton = document.querySelector('#cargar');

boton.addEventListener('click', function () {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

	xhr.onload = function () {
		if (this.status === 200) {
			const api = JSON.parse(this.responseText);
			let usuario = '';
			api.forEach((post) => {
				usuario += `
                <h3>Tu User id: ${post.userId}</h3>
                <h5>Tu id es: ${post.id}</h5>
                <h6>titulo: ${post.title}</h6>
                <p>info: ${post.body}</p>
                `;
			});
			document.querySelector('#listado').innerHTML = usuario;
		}
	};

	xhr.send();
});
