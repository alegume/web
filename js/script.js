"use strict";
/* Modo estrito disponível desde 2009 como ECMAScript 5 (ES5). É ignorado em versões anteriores,
	pois o JavaScript evoluiu sem problemas de compatibilidade, mas isso manteve os
	problemas e imperfeições da linguagem desde sempre. Com o modo estrito, novas funcionalidades
	foram adicionadas e outras foram modificadas. Por padrão, essas modificações não estão
	habilitadas (para manter compatibilidade). É necessário habilitar com 'use strict' ou "use strict",
	no início de uma função ou de todo o script. Isso irá permitir usar as novas características da
	linguagem (tornar o código "mais moderno") e aumentará sua eficiência.
*/

// Variáveis
/*
	Diferenças entre var e let/const:
	1) var não tem escopo de block. É visível em nível de função;
	2) a declaração de var é sempre processado no início de cada função,
		independente de onde foi declarada;
	3) nos browser, caso não sejam usados módulos, as variáveis globais são
		declaradas com var (essas variáveis podem ser acessadas via window.nomeVariavel nos browsers,
		global.nomeVariavel no Node.js ou globalThis.nomeVariavel como objeto universal nas novas definições do ECMAScript).

	REGRA GERAL: Use sempre let/const para definir variáveis de blocks. User window.nomeVariavel ou
		globalThis.nomeVariavel para definir variáveis globais.
*/

let num = 123;
num++;
console.log(num);
const PAI = 3.141592653589793;
console.log(PAI);


// Arrow functions
let sum = (a, b) => a + b;
let mult = (a, b, c) => a * b * c;
let square = (a) => a * a;

let calc = (n) => (n < 2) ? 1 : calc(n-1) + calc(n-2);
for (let i = 0; i < 5; ) {
	console.log(calc(i++));
}

// Objetos
let obj1 = new Object();
let obj2 = {
	nome: "Alexandre",
	cpf: "086.444.222-34",
	msg: function(str) { alert(str); },
	msg2: (str) => alert(obj2.nome),
	sum: (a, b) => a + b,
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

/* Diferenças entre "Valor" e "Referência" em JavaScript
	"JavaScript é uma linguagem orientada a objetos: isso significa que a maioria das coisas em JavaScript são Objetos.
	Por exemplo, as funções são Objetos. Os únicos elementos que não são objetos são os Dados de Tipos Primitivos: string, number, boolean, null e undefined.
	Esses tipos de dados primitivos também são imutáveis, o que significa que, uma vez criados, eles não podem ser modificados.
	Uma das diferenças entre os dois é que os dados de tipos primitivos são passados como valor e os objetos são passados como referência.
		----> Dados de Tipos Primitivos são passados como valor e Objetos são passados como referência."

	Referência: https://braziljs.org/artigos/diferencas-entre-valor-e-referencia-em-javascript/
*/

let nome = "Cláudia";
let nome2 = nome;

console.log(nome);
console.log(nome2);

nome2 = "Marie";

let usuario2 = usuario;
usuario2.nome = "Curie"

console.log(usuario.nome);
