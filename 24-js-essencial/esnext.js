// let e const
// let escopo de bloco
{
  var a = 2;
  let b = 3;
}

console.log(a);
//console.log(b); foda de escopo

// template string
const produto = "iPad";
console.log(`${produto} é caro!`);

// destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: "Ana", idade: 9 };
console.log(i, nome);
