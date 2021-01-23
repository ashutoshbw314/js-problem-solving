const fibSeries = n =>  n < 2n ? [[0n], [0n, 1n]][n] : (s => [...s, s.pop() + s.pop()])(fibSeries(n - 1n));

console.log(fibSeries(500n).join("\n"));
