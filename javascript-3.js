'use strict';

const getPath = (currentElement) => {
  const currentClassName = document.querySelectorAll(`.${currentElement.className}`);
  if (currentClassName.length == 1) {
    console.log(`${currentElement.className} is unique selector`)
    return currentElement.className
  }
  else if (currentClassName.length == undefined || currentClassName.length == 0 || currentClassName.length == null) {
    console.log(`Element doesn't have a className`)
  }
  else {
    console.log(`DOM contains 2 or more selected classNames`)
  }
}