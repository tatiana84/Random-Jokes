const url = 'https://icanhazdadjoke.com/';
const textJoke = document.querySelector('.text-joke');
const button = document.querySelector('.new-joke');

button.addEventListener('click', getJoke);
 
//getJoke();

async function getJoke(e){
    e.preventDefault();
    const jokeResponse = await fetch(`${url}`, {
        headers: {
            'Accept': 'application/json'
        },
    });
    
    const jokeObject = await jokeResponse.json();
    textJoke.innerText = jokeObject.joke;
}