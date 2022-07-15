

//inputs
let X1 = document.getElementById("x1");
let X2 = document.getElementById("x2");
let X3 = document.getElementById("x3");
let Y1 = document.getElementById("y1");
let Y2 = document.getElementById("y2");
let Y3 = document.getElementById("y3");
let calculate = document.getElementById("calc");
let outpustpsin = document.getElementById("output");
//button
calculate.addEventListener("click", dast);
let data = [];
//function
function dast() {
  //
  let x1 = +X1.value;
  let x2 = +X2.value;
  let x3 = +X3.value;
  let y1 = +Y1.value;
  let y2 = +Y2.value;
  let y3 = +Y3.value;
  data.push((x1, x2, x3, y1, y2, y3));

  //output
  outpustpsin.innerHTML = perimeterfinder(x1, x2, x3, y1, y2, y3);
}

function dist(x1, y1, x2, y2) {
  point1 = y2 - y1;
  point2 = x2 - x1;
  let sideadds = Math.sqrt(point1 ** 2 + point2 ** 2);
  return Math.round(sideadds);
}

function perimeterfinder(m1, m2, m3, o1, o2, o3) {
  A = dist(m1, o1, m2, o2);
  B = dist(m1, o1, m3, o3);
  C = dist(m3, o3, m2, o2);

  return A + B + C;
}
