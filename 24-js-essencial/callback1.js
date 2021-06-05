const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach((fabricante) => console.log(fabricante));
fabricantes.forEach((value, index, array) => {
  console.log("value: ", value);
  console.log("index: ", index);
  console.log("index: ", array);
});
