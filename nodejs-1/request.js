const count = document.querySelector(".counter-number");
const parrarel = document.getElementById("par");
const posled = document.getElementById("pos");

const sender = document.querySelector(".send-request");

const parReq = (i) => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "http://localhost:3000/", true); // false for synchronous request
  xmlHttp.send(null);
  if (i != count.value) {
    parReq(i + 1);
  }
  return;
}

const posReq = (i) => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "http://localhost:3000/", false); // false for synchronous request
  xmlHttp.send(null);
  if (i != count.value) {
    posReq(i + 1);
  }
  return;
}

sender.addEventListener("click", (e) => {
  e.preventDefault();
  let i = 1;
  if (posled.checked) {
    posReq(i)
  } else if (parrarel.checked) {
    parReq(i);
  }
});
