// os comandos foram executados no console do chrome

function f1() {
  console.log(this === window);
}

f1();

// this varia pela maneira de como é chamda a função
document.getElementsByTagName("body")[0].onclick = f1;

function f2() {
  console.log(this === document);
}

f2();

const body = (document.getElementsByTagName("body")[0].onclick = f2);

f2();

const f3 = () => console.log(this === window);

f3();

document.getElementsByTagName("body")[0].onclick = f3;

this === window;
