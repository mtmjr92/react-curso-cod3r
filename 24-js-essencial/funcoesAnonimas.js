const soma = function (x, y) {
  // funcao sem nome
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
  return x - y;
});
imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  falar: function () {
    console.log("Opa");
  },
  falar1() {
    console.log("Opa1");
  },
};

pessoa.falar();
pessoa.falar1();
