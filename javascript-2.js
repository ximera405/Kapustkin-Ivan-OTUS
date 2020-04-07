'use strict';

async function promiseReduce(asyncFunction = [], reduce, initialValue = 0) {
  for (let i = 0; i < asyncFunction.length; i++)
  try {
    initialValue = reduce(initialValue, await asyncFunction[i]())
  }
  catch (error) {
    console.error(`${asyncFunction[i].name} failed with ${error}`)
  }
  return Promise.resolve(initialValue);
}

var fn1 = () => {
  console.log('fn1')
  return Promise.resolve(1)
}
const fn2 = () => new Promise(() => {
  console.log('fn3');
  throw new Error('Offline');
});
var fn3 = () => new Promise(resolve => {
  console.log('fn2')
  setTimeout(() => resolve(2), 1000)
})

promiseReduce([fn1, fn2, fn3], function(memo, value) {
  console.log('reduce');
  return memo * value;
  }, 10).then(console.log);