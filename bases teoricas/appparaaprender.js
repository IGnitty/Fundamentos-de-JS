// const n1 = 30,
//       n2 = 40,
//       n3 = 70,
//       n4 = 6.78,
//       n5 = -5;

// let resultado;
// //se pueden hacer operaciones basicas de todo tipo, suma, resta, multiplicacion y division y resto
// resultado = n3 % n1;

// //operaciones complejas
// resultado = Math.PI;
// resultado = Math.round(2.5);
// resultado = Math.ceil(3.7);
// resultado = Math.floor(4.1);
// resultado = Math.sqrt(144);
// resultado = Math.abs(n5);
// resultado = Math.pow(n4,n5);
// resultado = Math.min(n1,n2,n3,n4,n5);
// resultado = Math.max(n1,n2,n3,n4,n5);
// resultado = Math.random();
// //console.log(resultado);

// // tipos de datos de una variable
// let variable = 'palabra';
//     variable = 12;
//     variable = true;
//     variable = null;
//     variable = undefined;
//     variable2 = [1,3,75,'hola',false, null, 0, '0'];
//     variable = {
//       nombre: 'Eliecer'
//     };
//     variable = new Date();
//     variable = Symbol('loco');
// //console.log(typeof variable);

// //como convertir de string a num

// const num1 = "50",
//       num2 = 34,
//       num3 = "doce";
//       num4 = Number(false);

// //console.log(Number(num1) + num2);
// //console.log(num4);

// //como convertir de num a string

// let hola = 2345253;
//     hola = String(hola);

//  //   console.log(hola);
//  //   console.log(hola.length);

// //templates literal o string templates

// const cuenta = 'pizza';
// const precio = 30;
// const cuenta2 = 'pasta';
// const precio2 = 60

// let html;

// //FORMA VIEJA
// /*html ='<ul>' +
//       '<li>Orden:' + cuenta + '</li>' +
//       '<li>precio:' + precio + '</li>' +
//       '<li>Orden:' + cuenta2 + '</li>' +
//       '<li>precio:' + precio2 + '</li>' +
//       '<li>Total:' + (precio + precio2) + '</li>' +
//       '</ul>';

// console.log(html);
// document.getElementById('app').innerHTML = html;
// */

// //FORMA NUEVA ECSMASCRIPT6:: importante usar las comillas invertidas especiales

// html = `
//         <ul>
//             <li>Orden: ${cuenta}</li>
//             <li>Precio: ${precio}</li>
//             <li>Orden: ${cuenta2}</li>
//             <li>Precio: ${precio2}</li>
//             <li>Orden: ${total(precio,precio2)}</li>
//         </ul>
//         `;

// function total(precio,precio2){
//   return precio + precio2;
// }

// //console.log(html);
// document.getElementById('app').innerHTML = html;

// //Arreglos

// //forma tipica de cualquier lenguaje
// const arreglo = [10, 12, 14, 16, 18];

// //console.log(arreglo);

// // metodo alternativo de crear arrays

// const diasSemana = new Array('lunes','martes','miercoles','jueves','viernes','sabado','domingo');
// //console.log(diasSemana);
// //console.log(diasSemana.length);
// //para comprobar si es un arreglo da true o false
// //console.log(Array.isArray(arreglo));
// //para imprimir datos dentro de un arreglo
// //console.log(arreglo[2]);
// //Para agregar elementos al array
// diasSemana[7] = 'juernes';
// //console.log(diasSemana);
// //otra forma
// arreglo.push(20);
// //console.log(arreglo);

// //para buscar un la posicion de un elemento dentro de un arreglo

// //console.log(arreglo.indexOf(20));

// //para agregar al inicio del arreglo
// arreglo.unshift(8);
// //console.log(arreglo);

// //eliminar un elemento en un arreglo
// arreglo.pop();//elimina el ultimo
// arreglo.shift();//elimina el primero
// arreglo.splice(1,1);//el primero numero es la posicion del arreglo, y el segundo es la cantidad de datos que quieres quitar despues del mismo, es decir, si pones 2 va a eliminar el que seleccionaste y el de su derecha.
// arreglo.reverse();//invierte el orden del arreglo, pone ol ultimo de primero y viceversa
// //console.log(arreglo);
// // para unir dos arreglos
// //console.log(arreglo.concat(diasSemana));

// //ordenar un arreglo
// const frutas = ['manzana','pera','cambur','fresa','piña','tamarindo'];
// //por orden alfabetico
// frutas.sort();
// //console.log(frutas);

// //para ordenar numeros

// const num = [2,3,5,7,9,53,235,26,658,24];
// num.sort(function(a,b){//se añade una funcion porque js no sabe ordenar numeros
//   return a-b;
// });
// //console.log(num);

// // para ordenarlos al reves pones b-a;

// //objetos

// const personas = {
//   nombre: 'Juan',
//   apellido: 'Perez',
//   trabajo: 'plomero',
//   correo: 'correo@correo.com',
//   edad: 23,
//   vivienda: {
//     pais: 'Venezuela'
//   },
//   comida: ['pasta','pollo','arroz'],
//   nacimiento: function(){
//     return new Date().getFullYear() - this.edad;
//   }
// };

// //console.log(personas);
// //console.log(personas.nacimiento());

// //Objetos dentro de arreglos
// const coches = [
//   {modelo: 'mustang', motor: 4.6},
//   {modelo: 'Camaro', motor: 3.0},
//   {modelo: 'Corvette', motor: 4.2},
//   {modelo: 'Viper', motor: 5.4},
//   {modelo: 'Challenger', motor: 7.1},
//   {modelo: 'Zonda', motor: 2.4}
// ];

// /*for(let i=0;i<coches.length;i++){
//   console.log(coches[i]);
//   //template literal
//   console.log(`${coches[i].modelo} ${coches[i].motor}`)
// }
// console.log(coches);*/

// //funciones

// /*function saludar(nombre){
//   console.log(`hola ${nombre}`);
// };

// saludar('Fabiana');
// saludar('Hector');
// saludar('Eliecer');

// function sumaResta(a,b){
//   console.log(a - b);
//   return a + b;
// };

// sumaResta(1,4);
// sumaResta(4,6);
// let suma;
// suma = sumaResta(3,9);
// console.log(suma);*/

// const suma = function(a,b){
//   return a + b;
// };
// //console.log(suma(1,2));
// //console.log(suma(3,334));

// //funciones iife

// (function(gg){
//   //console.log(`apendiendo ${gg}`)
// //console.log('creando un iife');

// })('js');

// //una funcion dentro de un objeto es un metodo

// const musica = {
//   reproducir: function(){
//     console.log('play');
//   },
//   pausar: function(){
//     console.log('pausar')
//   }
// };

// //musica.reproducir();
// //musica.pausar();

// //para probar una nueva caracteristica con try-catch
// //ingreso una funcion que no existe
// /*try{
//   arre();
// }catch(error){
//   console.log(error);
// }finally{
//   console.log('ejecuta el codigo de todas formas');
// }*/

// //fechas mm/dd/aaaa el mes de enero es 0 como un array

// /*const dia = new Date();

// console.log(dia);
// let mes = dia.getMonth();
// let dias = dia.setDate(01);
// let year = dia.getFullYear();
// let horas = dia.getHours();
// let min = dia.getMinutes();

// console.log(mes);
// console.log(dias);
// console.log(year);
// console.log(horas);
// console.log(min);*/

// //Estructuras de control if-else

// const edad  = 18;

// /*if(edad >= 18){
//   console.log('aberpasele');
// }else{
//   console.log('se me hace que no se va a poder mijo');
// }*/

// /*let puntaje;

// if(puntaje != 'undefined'){
//   console.log(`El puntaje fue de: ${puntaje}`);
// } else{
//   console.log('no hay puntaje')
// }*/

// /*let hora = 0;
// if(hora >= 0 && hora <= 23){
//   if(hora >=6 && hora <= 12){
//     console.log('es de dia');
//   }else if(hora >= 13 && hora <=19){
//     console.log('es por la tarde');
//   }else if(hora >= 20 && hora <= 23){
//     console.log('es de noche');
//   }else if(hora >= 0 && hora <= 5){
//     console.log('es de madrugada');
// }

// }else{
//   console.log('la hora no es valida');
// }*/

// /*let efectivo = 300,
//     credito = 300,
//     carrito = 500;

// if(carrito < efectivo){
// console.log(`se procedera al pago de su carrito, esta seguro que desea pagar ${efectivo - carrito}?`);
// }else{
//   console.log(`Su saldo es insuficiente, aun es necesaria la cantidad de ${carrito-efectivo}.`);
// }*/

// // switch en js, el oif funciona mejor

// /*const metodoPago = 'cheque';

// switch(metodoPago){
//     case 'efectivo':
//     console.log(`El usuario pago con ${metodoPago}`);
//     break;

//     case 'tarjeta':
//     console.log(`El usuario pago con ${metodoPago}`);
//     break;

//     case 'cheque':
//     console.log(`El usuario pago con ${metodoPago}`);
//     break;

//     case 'bitcoin':
//     console.log(`El usuario pago con ${metodoPago}`);
//     break;

//     default:
//     console.log('Ha ingresado un metodo de pago no soportado actualmente.')
// }*/

// /*let mes;

// switch(new Date().getMonth()){
//   case 0:
//     mes = 'enero';
//     break;

//   case 1:
//     mes = 'febrero';
//     break;

//   case 2:
//     mes = 'marzo';
//     break;

//   case 3:
//     mes = 'abril';
//     break;

//   case 4:
//     mes = 'mayo';
//     break;

//   case 5:
//     mes = 'junio';
//     break;

//   case 6:
//     mes = 'julio';
//     break;

//   case 7:
//     mes = 'agosto';
//     break;

//   case 8:
//     mes = 'septiembre';
//     break;

//   case 9:
//     mes = 'octubre';
//     break;

//   case 10:
//     mes = 'noviembre';
//     break;

//   case 11:
//     mes = 'Diciembre';
//     break;
// }

// console.log(`estamos en el mes ${mes}`);*/

// //For en js

// /*for(let i = 1; i < 10; i++){
// if(i % 2 ==0){
//   console.log(`el numero ${i} es par.`);
// }else{
//   console.log(`el numero ${i} es impar.`);
// }
// }*/

// // bucles while y D0-while

// let i = 0;

// /*while(i<10){
// if(i===5){
//   //console.log('cinco');
//   i++
//   continue;
// }
// //console.log(`numero: ${i}`);
// i++;
// }*/

// const Genero = ['Salsa', 'Bachata', 'Pop', 'Rock', 'Merengue'];
// //console.log(Genero.length);
// let j = 0;

// while(j < Genero.length){
//   //console.log(`El genero seleccionado fue ${Genero[j]}.`);
//   j++;

// }

// //Do-while, la condicion se ejecuta al menos una vez si o si

// do{
//   //console.log(`numero: ${i}.`);
//   i++;
// }while(i<10);

// //For-each para recorrer arreglos

// //con un for simple
// const pendientes = ['comer', 'cagar', 'dormir', 'repetir'];

// //console.log(pendientes);

// for(let i = 0; i < pendientes.length; i++){
//   ///console.log(`pendientes: ${pendientes[i]}`);
// }

// //Con For-each

// pendientes.forEach(function(pendiente, index){
//   //console.log(`${index}: ${pendiente}`);
// });

// //console.log(pendientes);

// // bucle Map para recorrer arrays

// /*const compras = [
//   {id: 11243214, producto: 'Queso', Precio: 213},
//   {id: 24638457, producto: 'Jamon', Precio: 124},
//   {id: 12353444, producto: 'Pollo', Precio: 324},
//   {id: 12342356, producto: 'Carne', Precio: 123},
//   {id: 12143532, producto: 'webos', Precio: 745}
// ];*/
// //const  nombreProducto = compras.map(function(compras){
//   //return compras.producto;

// //});
// //console.log(nombreProducto);

// //Iteradores predefinidos de javascript

// const colores = ['amarillo', 'azul', 'rojo', 'verde'];
// const orden = new Set([113,123,126,120]);
// const trabajo = new Map();
// trabajo.set('nombre', 'Eliecer');
// trabajo.set('trabajo', 'desarrollador');

// //entries iterator

// // for(let entrada of colores.entries()){
// // console.log(entrada);
// // }

// // for(let ordenes of orden.entries()){
// //   console.log(ordenes);
// // }

// // for(let datosTrabajador of trabajo.entries()){
// //   console.log(datosTrabajador);
// // }

// //Values iterator, solo imprime valores, nada de posiciones

// // for(let entrada of colores.values()){
// //   console.log(entrada);
// // }

// // for(let ordenes of orden.values()){
// //   console.log(ordenes);
// // }

// // for( let datosTrabajador of trabajo.values()){
// //   console.log(datosTrabajador);//aqui te muestra solo los datos del trabajadro, no el campo al que pertennece a diferencia del entries iterator
// // }

// //Keys iterator, solo te reegresa las posiciones de los datos

// // for(let entrada of colores.keys()){
// //   console.log(entrada);
// //   }

// //   for(let ordenes of orden.keys()){
// //     console.log(ordenes);
// //   }

// //   for(let datosTrabajador of trabajo.keys()){
// //     console.log(datosTrabajador);
// //   }

// //default iterator, no le pasas quue metodo quieres buscar

// // for(let entrada of colores){
// //   console.log(entrada);
// //   }

// //   for(let ordenes of orden){
// //     console.log(ordenes);
// //   }

// //   for(let datosTrabajador of trabajo){
// //     console.log(datosTrabajador);
// //   }

// //String iterator

// // const valen = 'He vuelto perras jejejeje';

// // for(let mensaje of valen){
// //   console.log(mensaje);
// // }

// //links iterator, se puede utilizar para recorrer  cualquien elemento dentro del archivo HTML

// // const enlaces = document.getElementsByTagName('a');
// // for(let enlace of enlaces){
// //   console.log(enlace.href);
// // }

// //Metodos del windows Object

// /*Entre los metodos del windows object se encuentrar los siguientes:
// -prompt(); muestra un cuadro de interaccion donde el usuario puede introducir un dato
// -confirm(); muestra un cuadro en interaccion en el que el usuario puede elegir si aceptar o cancelar la acccion
// - window.outerHeight altura de la panntalla actual
// - window.outerWidth anchura de la pantalla actual
// sustituyendo outer por inner determinas el espacio de la pantalla utilizzable

// -window.location muestra tu direccion ip, tu localhost, tu protocolo y tu puerto
// - window.location.href = 'link' es una forma de redireccionar desde js

// -window.history.go(int), navega entre paginas que hayas visitado recientemente y se encuentren en tu historial, no es muy fiable

// -window.navigator; es para saber desde que navegador estas y sus datos, excepto internet explorer
// */

// //Scope en js

// // var a = 'a';
// // let b = 'b';
// // const c = 'c';

// // //Para medir el Scope de funcion
// // function functionScope(){
// //   var a = 'A';
// //   let b = 'B';
// //   const c = 'C';
// //   console.log('FUNCION: '+ a,b,c);//El Scope de estas variables es local, esto quiere decir que las variables solo existen dentro de esta funcion, aunque fuera de ella existan variables con el mismo nombre.
// // }
// // functionScope();

// // //Scope de bloque (lo que va dentro de llaves)

// // if(true){
// //   var a = 'Aa';
// //   let b = 'Bb';
// //   const c = 'Cc';
// //   console.log('BLOQUE: '+ a,b,c);//las variables declaradas como 'var' se van a ver afectadas a nivel global por el cambio que se realice aqui, mientras 'let' y 'const' no, tambien tendran un Scope "local" al igual que las funciones.
// // }

// // console.log('GLOBALES: '+ a,b,c);//estas son visibles por cualquier elemento dentro del proyecto
