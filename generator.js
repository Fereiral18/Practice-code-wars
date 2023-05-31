var miIterable = {};
miIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for (let valor of miIterable) {
  console.log(valor);
}
