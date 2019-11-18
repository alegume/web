"use strict";

let sum = (a, b) => a + b;
let mult = (a, b, c) => a * b * c;
let square = (a) => a * a;

let obj1 = new Object();
let obj2 = {
	nome: "Alexandre",
	cpf: "086.444.222-34",
	msg: function(str) { alert(str); },
	msg2: (str) => alert(obj2.nome),
	sum: (a, b) => a+b,
};

obj2.idade = 19;
let obj3 = {};

obj3 = Object.assign({}, obj2);

for (let key in obj3) {
	console.log(key + " -> " + obj2[key]);
}

obj2.msg2("oi22");

let usuario = {
	nome: "Alexandre",
	idade: 7,
	maior: () => (usuario.idade < 18) ? "Menor": "Maior"
};


console.log(usuario.maior());

let calc = (n) => (n < 2) ? 1 : calc(n-1) + calc(n-2);
for (let i = 0; i < 5; ) {
	console.log(calc(i++));
}
