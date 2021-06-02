function Pessoa() {
  this.idade = 0;

  setInterval(
    function () {
      this.idade++; // nao referencia idade da funcao
      console.log(this.idade);
    }.bind(this),
    1000 // faz a amarração para a referencia
  );
}

new Pessoa();

function Pessoa1() {
  const self = this;
  this.idade = 0;

  setInterval(function () {
    self.idade++;
    console.log(self.idade);
  }, 1000);
}

new Pessoa1();
