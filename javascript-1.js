// Множественное использование
var prevSum = 0;
let sum = (x) => {
  if (x == undefined) return prevSum;
  let summ = x;
  return (y) => {
    if (y !== undefined) {
      return sum(summ + y)
    } else {
      prevSum = summ;
      return summ;
    }
  }
}
console.log(sum(1)(2)(3)(4)());
console.log(sum())


// Сумма всех аргуметов
var prevSum1 = 0;
let sum1 = (n)  => {
  let summ = 0;
  if (n.length !== 0) {
    for (let i = 0; i < n.length; i++) {
      summ += n[i];
    }
    prevSum = summ;
    return summ;
  }
  else {
    return prevSum
  };
}
