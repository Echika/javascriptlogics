//Use the map method to transform an array
let sum = 0;
const multiplyAlwaysByThree = (arr) => {
   const transformed = arr.map(elem => elem * 3);
   for(let transform of transformed){
       sum += transform;
    }
    return sum;
}

const example = [34, 79, 22, 58, 93];
console.log(multiplyAlwaysByThree(example))