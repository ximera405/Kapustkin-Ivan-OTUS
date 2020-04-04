var prevSum = 0;

let sum = (...n) => {
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