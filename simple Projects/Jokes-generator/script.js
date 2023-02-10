const btnEL = document.getElementById("btn")
const jokeEL = document.getElementById("joke")

const apiKey = "ivZHhkodnKWxwa4e+GXczQ==5ydqkNPe1yPKNZ5E";

const options = {
    method: "GET",
    headers: {
        "x-Api-Key": apiKey

    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){

    try{ 
    jokeEL.innerText = "Updating...";
    btnEL.disabled = true;
    btnEL.innerText="Loading..";
    const response = await fetch(apiURL, options)
    const data = await response.json();

    btnEL.disabled = false;
    btnEL.innerText="Tell me a joke";
} catch(error) { jokeEL.innerText="An error happened, try gain later";
btnEL.disabled= false;
btnEL.innerText="Tell me a joke";
console.log(error);
}
}

btnEL.addEventListener('click', getJoke)
