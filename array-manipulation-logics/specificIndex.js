function specificIndex(arr, ind){
    return arr.includes(ind)
}

//testing 
console.log(specificIndex([54, 89, 32, 68], 3)) //false
console.log(specificIndex([78, 33, 80, 38], 33)) //true