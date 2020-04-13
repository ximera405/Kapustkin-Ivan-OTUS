'use strict';

const getPath = (currentElement, uniqueName = '') => {
  let number = 0;

  for (let i = 0; i < currentElement.parentElement.childElementCount; i++) {
    console.log(document.body.children[i]);
    if (currentElement === currentElement.parentElement.children[i]) {
      number = i + 1;
    }
  }

  if (number !== 0) {
    uniqueName += `${currentElement.localName}:nth-child(${number})`;
  }

  if (currentElement.parentElement.localName !== "body") {
    uniqueName += ' ';
    return getPath(currentElement.parentElement, uniqueName);
  }

  return `body ${uniqueName}`;
}