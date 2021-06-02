const pessoa = {
  saudacao: "Bom dia",
  // recurso ECma Script
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePesssoa = pessoa.falar.bind(pessoa);
falarDePesssoa();
