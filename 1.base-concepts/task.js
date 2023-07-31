"use strict"
function solveEquation(a, b, c) {
  d = b**2 - 4 * a * c;
  if (d < 0) {
    let arr = [];
  } else if (d = 0) {
    let x = -b / (2 * a);
    let arr = [x];
  } else (d > 0) {
    let x1 = (-b + Math.sqrt(d) ) / (2*a);
    let x2 = (-b - Math.sqrt(d) ) / (2*a);
    let arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}