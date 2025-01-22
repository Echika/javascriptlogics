//There two methods of going about this: 'indexOf' and 'findIndex' 
//indexOf method: This method is used to solve a simple array.

function finderIndex1(arr, elem){
    return arr.indexOf(elem);
}

//testing
const ech = ['e', 'c', 'h', 'i', 'k', 'a'];
console.log(finderIndex1(ech, 'e')) // 0

//findIndex method: This method is used to solve more completed array
//example to find the index of an array of Objects but though can also be used to solve simple array problems

function finderIndex2(arr, elem){
    return arr.findIndex(elem)
}

const users = [
    {name: 'Echika', occupation: 'Front-end Engineer'},
    {name: 'Orimisuwa', occupation: 'BusinessMan'},
    {name: 'Fasola', occupation: 'Trouble Shooter'}
];
console.log(finderIndex2(users, user => user.name === 'Fasola')) //2