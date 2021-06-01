// Função em JS é First-Class Object (Citizens)
// Higer-order function

// criar de forma literal
// função retorna undefined se nao retornar nada
function fun1() {}

// armazenar uma funcao em uma variavel
const fun2 = function () {};

// armazenar uma funcao dentro de um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

console.log(array[0](2, 3));

// armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};

console.log(obj.falar());

// passar uma funcao como parametro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// funcao pode retornar/conter uma funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMaisTres(4);
