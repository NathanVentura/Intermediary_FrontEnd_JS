console.log("testando")
var a = 10;
var b = 20;
var total = a + b;
console.log(total);

// Abaixo podemos ver duas variais com o mesmo nome, porém uma seguindo o camelcase e outra em caixa alta
// Como o JavaScrit é case sentive essas viarias como mesmo nome são reconhecidas como variaveis diferentes
var nomePessoa = "Lucas";
var NOMEPESSOA = "Nathan";
console.log(nomePessoa);

// É possível declarar varias variavés conforme exemplo abaixo
var var1 = 1,
    var2 = 2,
    var3 = 3;

    console.log(var1);

// Não é obrigatório atribuir a variável "var" com algum valor, você pode declara-la e depois atribuir um valor.

// Para a uma variavel "let" é obrigatório atribuir um valor ao cria-la.

// É possível atribuir um  novo valor para uma váriavel let: 

let book = 10;
book = 20;

console.log('O valor da variavel book é ', book);

/*
Diferenças entre var e let:
 - Use "var" se não for atribuir um valor;
 - Use "let" se for atribuir um valor;
*/

//Para uma variável "const" não é permitido atribuir um novo valor, pois o seu seu valor deve ser constante
const valor1 = 100;
valor1 = 200;
console.log(valor1)