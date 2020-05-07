// Eliminar de Local Storage
// localStorage.clear();

// let elementosDOM;

// // elementosDOM = document;
// // elementosDOM = document.all;
// // elementosDOM = document.all[10];
// // elementosDOM = document.head;
// // elementosDOM = document.body;
// // elementosDOM = document.domain;
// // elementosDOM = document.URL;
// // elementosDOM = document.forms;
// // elementosDOM = document.characterSet;
// // elementosDOM = document.forms[0].classList;


// //scrpits

// elementosDOM = document.scripts;

// console.log(elementosDOM);

//getelementByID - solo para id

// let encabezado;

// encabezado = document.getElementById('encabezado');
// encabezado.style.color = 'rgb(255,255,255)';
// encabezado.style.background = 'rgb(0,0,0)';
// encabezado.style.borderRadius = '7px';
// console.log(encabezado);

// encabezado.textContent = 'Cursos Perros';

// //QuerySelector - id clases y todo

// const encabezado = document.querySelector('.encabezado');

// encabezado.style.color = 'rgb(255,255,255)';
// encabezado.style.background = 'rgb(0,0,0)';
// encabezado.style.borderRadius = '7px';
// console.log(encabezado);

// //getelementbyid y querysellector solo funcionen para un solo item, un solo elemento del dom, para seleccionar varios se utiliza queryselectorall

//Seleccionar varios elementos

// const enlaces = document.getElementsByClassName('enlace')[3];//el ccorchete es para seleccionar un solo elemento ya que se ordenan como un array
// console.log(enlaces);

//querySelectorAll

// const enlaces = document.querySelectorAll('#principal .enlace');
// enlaces[3].style.color = 'rgb(255,0,0)';

// console.log(enlaces);

// const enlace = document.querySelectorAll('#principal a:nth-child(odd)');

// enlace.forEach(function(impares){
//   impares.style.color = 'rgb(2555,0,0)';
// });
// console.log(enlace);

//traversing, para navegar entre clases padres y la internas con mas facilidad que con QuerySelector

// const navbar = document.querySelector('#principal');
// // console.log(navbar.nodeName);//los nodos son las eetiquetas de html
// // console.log(navbar.nodeType);//1- Elementos, 2- Atributos, 3- text node, 8- comentarios, 9- documentos, 10- Doctype. 
// navbar.children[0].textContent = 'Para tu empresa';
// console.log(navbar.children);

// const barra = document.querySelector('.barra');

// console.log(barra.children[0].children);

//traversing inverso del hijo al padre

// const enlace = document.querySelectorAll('.enlace');

// console.log(enlace[0].parentElement);//se recomienda parentElemente mas que parentNode

// const cursos = document.querySelectorAll('.card');
// console.log(cursos[0].parentElement.parentElement.parentElement.children[0].parentElement);

//siblings - elementos al mismo nivel

// const enlace = document.querySelectorAll('.enlace');

// console.log(enlace[2].previousElementSibling.nextElementSibling);

// Creando elemenntos HHTML desde JS
//Crear enlace

// const nuevoEnlace = document.createElement('a');
// // Agregarle una clase Css
// nuevoEnlace.className = 'enlace';
// //agragar un id
// nuevoEnlace.id = 'nuevo-id';
// //agregar un href
// nuevoEnlace.setAttribute('href', '#');
// //agregarle contenido 
// //forma #1
// nuevoEnlace.textContent = 'Inyectado desde JavaScript';
// //forma #2
// // nuevoEnlace.appendChild(document.createTextNode('Nuevo Enlace'));

// //Para agragarlo al HTML
// document.querySelector('#secundaria').appendChild(nuevoEnlace);
// console.log(nuevoEnlace);


//Como reemplazar datos de un archivo html

// const nuevoH1 = document.createElement('h1');
// nuevoH1.id = 'encabezado';
// nuevoH1.className = 'encabezado';
// nuevoH1.appendChild(document.createTextNode('Nuevos Cursos'));
// //Elemento a reemplazar - Para reemplazar debes irte al elemento padre donde se encuentra el nodo que deseas reemplazar
// const h1Viejo = document.querySelector('#encabezado');
// //elemento Padre
// const elementoPadre = document.querySelector('#lista-cursos');

// elementoPadre.replaceChild(nuevoH1,h1Viejo);
// console.log(h1Viejo.parentElement);
// console.log(nuevoH1);

//Eliminar un nodo de HTML desde JS

// const enlace = document.querySelectorAll('.enlace');
// const nav = document.querySelector('#principal');

// //codigo para eliminar
// enlace[2].remove();
// nav.removeChild(enlace[4]);

// console.log(enlace,nav);

// const primerLi = document.querySelector('.enlace');
// let elemento;

// //obtener una clase de css
// elemento = primerLi.classList.add('hols');
// elemento = primerLi.classList.remove('hols');
// elemento = primerLi.className;

// console.log(primerLi);

// //atributos

// elemento = primerLi.getAttribute('href');//obtener el tipo de atributo
// elemento = primerLi.setAttribute('href','http://www.google.co.ve');//colocar un atributo
// elemento = primerLi.hasAttribute('href');//compureba que exista el atributo
// elemento = primerLi.removeAttribute('href');//elimina el atributo
// console.log(elemento);

//event listener click

// Forma #1

// document.querySelector('#submit-buscador').addEventListener('click',function(event){
//     event.preventDefault();
//     alert('buscando cursos');
//     let elemento;
//     elemento = event.target;
//     console.log(elemento);
// });

// // Forma #2;

// document.querySelector('.borrar-curso').addEventListener('click',borrarCurso);

// function borrarCurso (event){
//   event.preventDefault();
//   alert('Su curso se ha borrado');
// }

//Mas event listeners con el mouse

// const encabezado = document.querySelector('#encabezado');
// const enlace = document.querySelectorAll('.enlace');
// const boton = document.querySelector('#vaciar-carrito');

// //boton.addEventListener('click',obtenerEvento);//un click (mousedown) (mouseup - cuando sueltas el click)
// //encabezado.addEventListener('dblclick',obtenerEvento);//dobleclick
// //encabezado.addEventListener('mouseenter',obtenerEvento);//pasar el mouse sobre (mouseover) (mousemove - todo lo que   te muevas denntro del elemento)
// //encabezado.addEventListener('mouseleave',obtenerEvento);//quitar el mouse de (mouseout)

// function obtenerEvento(event){
//   console.log(`evento: ${event.type}`);
// }

// evennt listener para inputs(campos que pueden ser rellenados por el usuario);

// const buscador = document.querySelector('#buscador');

// // buscador.addEventListener('keydown',obtenerEvento);//keydown es para escribir
// // buscador.addEventListener('keyup',obtenerEvento);//keyup se ejecuta al soltar la tecla que se presiona
// // buscador.addEventListener('keypress',obtenerEvento);// cuando presionas una tecla
// // buscador.addEventListener('focus',obtenerEvento);// se ejecuta cada vez que se hace click en la zona de input
// // buscador.addEventListener('blures',obtenerEvento);// se ejecuta cada vez que sales del input
// // buscador.addEventListener('cut',obtenerEvento);// se ejecuta cada vez que el usuario corta algo del input
// // buscador.addEventListener('copy',obtenerEvento);// se ejecuta cada vez que se copia algo del input
// // buscador.addEventListener('paste',obtenerEvento);// se ejecuta cada vez que se pega algo del input
// // buscador.addEventListener('input',obtenerEvento);//ejecuta todos los metodos anteriores, es un todo en uno


// function obtenerEvento(event){
//     console.log(buscador.value);
//     console.log(`evento: ${event.type}`);
//     }

//Event bubbling un evento que selecciona varios elementos

// const card = document.querySelector('.card');
// const info = document.querySelector('.info-card');
// const carrito = document.querySelector('.agregar-carrito');

// card.addEventListener('click',function(e){
//     console.log('click');
//     e.stopPropagation();//esto evita el event bubbling
// });

// carrito.addEventListener('click',function(e){
//     console.log('click carrito');

// });

// info.addEventListener('click',function(e){
//     console.log('click info');

// });


//delegation - para hacer excepciones en los event listening

// document.body.addEventListener('click',eliminar );

// function eliminar (e){
//     e.preventDefault();
//     console.log('click');//verificacion de la funcion
//     console.log(e.target.classList);//para ubicafr la clase
//     if(e.target.classList.contains('borrar-curso') ){
//         console.log('si');

//     }else{
//         console.log('no');
//     }
// }

//Local Storage

//agregar al local storage - solo se borra si el usuario limpia la cache

localStorage.setItem('nombre','juan');
//Agregar al session storage - si cierras el navegador se borra
sessionStorage.setItem('nombre','Juan');

//Eliminar el local storage

// localStorage.removeItem('nombre');

// traer un elemento del local storage

const nombre = localStorage.getItem('nombre');
console.log(nombre);

//eliminar todo el local storage

localStorage.clear();