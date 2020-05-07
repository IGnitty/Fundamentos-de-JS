// // Aprendiendo objetos constructores y prototypes

// // forma habitual de crear objetos

// // const cliente = {
// // 	nombre: 'Juan',
// // 	Saldo: 200,
// // 	tipoCliente: function () {
// // 		let tipo;
// // 		if (this.Saldo > 1000) {
// // 			tipo = 'Gold';
// // 		} else {
// // 			tipo = 'normal';
// // 		}
// // 		return tipo;
// // 	},
// // };

// // //el metodo 'this' se utiliza para acceder a los atributos que se encuentran dentro de un mismo objeto, clase, constructor o prototipo

// // console.log(cliente.nombre);

// // forma mas habitual de crear objetos - es mas vieja que la anterior pero tiene mas ventajas

// function Cliente(nombre, saldo) {
// 	//este es el constructor, el esquema del objeto
// 	this.nombre = nombre;
// 	this.saldo = saldo;
// 	this.tipoCliente = function () {
// 		let tipo;

// 		if (this.saldo > 1000) {
// 			tipo = 'platinum';
// 		} else {
// 			tipo = 'caquita';
// 		}
// 		return tipo;
// 	};
// }

// // const persona = new Cliente('Pedro', 20000);

// // console.log(persona.tipoCliente());

// // crear strings usando constructores, esto tambien aplica para numeros, booleans, funciones y objetos, arreglos

// const nombre = new String('Sofia'); // todo lo que crees con new sera representado como un objeto

// console.log(nombre);

//Prototipos

// function Cliente(nombre, saldo) {
// 	//este es el constructor, el esquema del objeto
// 	this.nombre = nombre;
// 	this.saldo = saldo;
// }

// //Creando el prototype

// Cliente.prototype.tipoCliente = function () {
// 	let tipo;
// 	if (this.saldo > 1000) {
// 		tipo = 'platinum';
// 	} else {
// 		tipo = 'caquita';
// 	}
// 	return tipo;
// };

// // funcion que retorna el nombre y el saldo

// Cliente.prototype.datosCliente = function () {
// 	return `nombre: ${this.nombre},
// saldo: ${this.saldo}`;
// };
// const persona = new Cliente('Pedro', 20000);

// // console.log(persona.datosCliente());

// // heredar prototipos

// function Empresa(nombre, saldo, tlf, tipo) {
// 	Cliente.call(this, nombre, saldo); //asi se heredan variables de otra funcion
// 	this.tlf = tlf;
// 	this.tipo = tipo;
// }
// //Para heredar el prototype de otra funcion
// Empresa.prototype = Object.create(Cliente.prototype);

// const empresa = new Empresa('Udemy', 400000, '124454234', 'Cursos');

// console.log(empresa.datosCliente());

//Object Create - nueva forma de crear un objeto

// const cliente = {
// 	Saldo: function () {
// 		return `hola ${this.nombre}, tu saldo es ${this.saldo}`;
// 	},
// 	Retiro: function (retiro) {
// 		return (this.saldo -= retiro);
// 	},
// };

// const mary = Object.create(cliente);
// mary.nombre = 'Mary';
// mary.saldo = 2000;
// mary.Retiro(500);

// console.log(mary.Saldo());

//Clases en JS

class Cliente {
	constructor(nombre, apellido, saldo) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.saldo = saldo;
	}
	bienvenida() {
		return `hola ${this.nombre} ${this.apellido}, tu saldo es de: ${this.saldo}`;
	}

	static hola() {
		return `hola wapo`;
	}
}

const maria = new Cliente('Maria', 'Perez', 2000);
console.log(maria.bienvenida());

//Como heredar clases

class Empresa extends Cliente {
	constructor(nombre, apellido, saldo) {
		//super toma los datos de la clase padre
		super(nombre, apellido, saldo);
	}
}

const udemy = new Empresa('udemy', 'ymedu', 24334423);

console.log(udemy.bienvenida());
