var arrayOne = [1, 2, 3, 4, 5];
// find a even number
function evenNumber(array) {
  var arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 == 0 && arrayResult.push(array[i]);
  }
  console.log(`The even array is = ${arrayResult}`);
}
evenNumber(arrayOne);

// Alternate way
let resultArray=arrayOne.filter(val=>val% 2 == 0)
console.log(resultArray) // output:[2,4]



