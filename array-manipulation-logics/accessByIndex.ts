//How to access an array element by element
function arrayIndex<T>(arr:T[], ind:number):T | undefined {
    return arr[ind]
}

//testing
console.log(arrayIndex([87, 34, 90, 23], 3))