// A solution to find the index of a maximum value in an array
// to solve this we should think of getting a max value. 
//we would use the Math.max() method to solve this

//create a function whose job is to alway find the maximum value in an array. This also means all the elements in the array has to be numbers
function findMaxValue(arr){
    return arr.indexOf(Math.max(...arr))
}

//testing
console.log(findMaxValue([56, 89,58, 98, 43])); // 3