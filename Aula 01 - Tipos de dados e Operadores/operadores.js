
//Operações: +, -, *, /
// Maneira padrão de realizar uma operação:
var n1 = 3;
n1 = n1 * 10;
console.log(n1);

// Forma encurtada:
var n2 = 3;
n2 *= 10;
console.log(n2);

// Incremento:
var x2 = 10;
x2++
console.log(x2);

//Decremento:
var x2 = 10;
x2--
console.log(x2)

//Comparação:
var 
b = 20;
c = 60;

console.log(b == c);
console.log(b < c);
console.log(c > b);
console.log(c < b);
console.log(b < c && c > b);
console.log(!(b < c && c > b));
console.log(b != c);

//Verificar se D é menor que E e D é divisivel por 2

d = 4;
e = 7;

console.log(d < e && d % 2 == 0);

// Verificar se E é maior ou igual D ou E dividido por 2 o resultado é 2

console.log(e >= d || e / 2 == 2);

// Verificar se D é maior que E e E é maior igual a 5

console.log(d > e && e >= 5);

//Verificar se E é par ou impar usando ternario
b = 11;
resultado = b % 2 == 0 ? "Par" : "Impar";

console.log(resultado);
