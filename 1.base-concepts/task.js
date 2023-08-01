"use strict"
function solveEquation(a, b, c) {
  let d = (b ** 2) - (4 * a * c);
  let arr = [];
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else {
    let x1 = (-b + Math.sqrt(d) ) / (2*a);
    let x2 = (-b - Math.sqrt(d) ) / (2*a);
    arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let creditBody = amount - contribution;
  let percentPerMonth = percent / 100 / 12;
  let monthPayment = creditBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
  let finalAmount = Number((monthPayment * countMonths).toFixed(2));
  return finalAmount;
}