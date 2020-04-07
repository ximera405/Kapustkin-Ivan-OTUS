// Множественное использование
const sum = (x) => {
  if (x === undefined) {
    return summ;
  }
  window.summ = x;

  return (y) => {
    if (y !== undefined) {
      return sum(summ + y);
    }
    return summ;
  }
}
console.log(sum(1)(2)(3)(4)());
console.log(sum())


// Сумма всех аргуметов
let sum1 = (n)  => {
  window.summ1 = 0;
  if (n.length !== 0) {
    for (let i = 0; i < n.length; i++) {
      summ1 += n[i];
    }
    return summ1;
  }
  return summ1;
}
