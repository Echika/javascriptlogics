//A logic to find the union between two arrays;
 const unionArray = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
 }
 
 //testing 
 const echika = ['3', 'a', 'j', 9, 'v'];
 const com = ['k', 'j', 3, 'l']
 console.log(unionArray(echika, com)) // ['3', 'a', 'j', 9, 'v', 'h', 3, 'l'];