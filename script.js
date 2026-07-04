const img = document.getElementById("Pokeimg");
const shinycheck = document.getElementById("shiny-btn")


async function pokefetch() {
    try{
        const pokemonName = document.getElementById("search-input").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Error while fetching data")
        }
        const data = await response.json();
        const pokesrc = data.sprites.front_default;
        const pokesrcshin = data.sprites.front_shiny;
        const stats = data.stats
        if (shinycheck.checked) {
            img.src = pokesrcshin
        }
        else {
            img.src = pokesrc
        }
        document.getElementById("weight-value").textContent = data.weight
        document.getElementById("name-value").textContent = data.name
        document.getElementById("pp-value").textContent = data.id
        console.log(shinycheck)
    }
    catch(error){
        console.log(error)
    }
}