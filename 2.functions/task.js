function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max){
      max = arr[index];
    };
    if (arr[index] < min){
      min = arr[index];
    };
    sum = sum + arr[index];
  }
  let average = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: Number(average) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Infinity;
  let max = -Infinity;
  let diff = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max){
      max = arr[index];
    };
    if (arr[index] < min){
      min = arr[index];
    };
    diff = max - min;
  }
  return diff;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[index];
    } else {
      sumOddElement = sumOddElement + arr[index];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[index];
      countEvenElement = countEvenElement + 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let index = 0; index < arrOfArr.length; index++) {
    const result = func(...arrOfArr[index]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}