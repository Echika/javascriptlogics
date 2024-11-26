const userPrime = document.querySelector('#userPrime');
const button = document.querySelector('button');
const result = document.querySelector('#result')

button.addEventListener('click', () => {
    let prime = Number(userPrime.value);

    if(prime <= 1) {
        result.textContent = `${prime} is a prime number`
        return;
    }

    for(let i = 2; i <= Math.sqrt(prime); i++){
        if(prime % i === 0){
            result.textContent = `${prime} is not prime number`;
            return
        }
    }
result.textContent = `${prime} is a prime number`
});