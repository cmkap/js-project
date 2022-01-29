const addToBatch = (array, number) => {
    if (array.length > 5) {
        return array;
    } 
    return new_array = array.concat(number);
}

console.log(addToBatch([1], 3)); 
//[ 1, 3 ]

console.log(addToBatch([1, 2, 3], 4)); 
//[ 1, 2, 3, 4 ]

console.log(addToBatch([], 8)); 
//[ 8 ]

console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); 
// [1, 2, 3, 4, 5, 6 ]

// The push() adds elements to the end of an array and returns the new length of the array. Thus your return here is invalid.

// The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.