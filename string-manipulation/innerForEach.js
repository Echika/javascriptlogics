// A function that takes a string as input but returns the string sorted in alphabetical
function  transformElements(str){
  const splittedStr = str.split(' ');
  if(splittedStr.length <= 1){
      return 'Enter a longer sentence for better performance';
  }
  return (splittedStr.map(elem => elem.split('').sort().join(''))).join(' ')
}

//testing
transformElements('i love my mother so much i donot know what you think about that. do you love your mother too')
//'i elov my ehmort os chmu i dnoot know ahtw ouy hiknt abotu .ahtt do ouy elov oruy ehmort oot'