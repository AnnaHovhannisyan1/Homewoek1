

function findOddNumbers(arr) {

  let odd = [];
  let even = [];

  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i])

    }
    else {
      odd.push(arr[i])
    }
  }
  return [even, odd]
}

let nums = [2, 3, 4, 5, 65,66,33,1,0];

let result = findOddNumbers(nums);

console.log(result)