// A function used to count digits appearing in a string
function countDigits (str) {
    const digit = str.split('');
    const count = 0;
    for(let num of digit){
        if(!isNaN(parseInt(num))){
            count++;
        }
    }
    return count;
}