// Imprime en consola los 20 primeros numeros de la serie Fibonacci.
// La serie inicia con 0 y 1, y cada numero siguiente es la suma de los dos anteriores.

const CANTIDAD = 20;

function generarFibonacci(cantidad) {
  const serie = [];
  let anterior = 0;
  let actual = 1;

  for (let i = 0; i < cantidad; i++) {
    serie.push(anterior);
    [anterior, actual] = [actual, anterior + actual];
  }

  return serie;
}

console.log(generarFibonacci(CANTIDAD).join(", "));
