/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
	// if given array is empty return undefined or null.
    if(numbers.length === 0)
    return undefined;


	//we will consider the max .... that is array[0] as the maximum or the largest number.
	
    let max = numbers[0];

    for(let i = 1; i < numbers.length ; i++){
   
	    //if the array[i] is larger than the max we will replace  max  with the array[i].
	    if(numbers[i] > max ){

            max = numbers[i];
        }
        

    }
    return max;
}

module.exports = findLargestElement;
