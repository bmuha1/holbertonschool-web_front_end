function countPrimeNumbers() {
  const primeTable = new Array(100).fill(true);
  let count = 0;
  for (let i = 2; i < 100; i++) {
    if (primeTable[i] === true) {
      count++;
      for (let j = 2; i * j < 100; j++) {
        primeTable[i * j] = false;
      }
    }
  }
  return count;
}

let t0 = performance.now();
console.log(countPrimeNumbers());
let t1 = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
