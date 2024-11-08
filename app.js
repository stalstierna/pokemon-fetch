// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {

//     if(!response.ok){
//         throw new Error("Could not fetch resource");
//     }
//     return response.json;
// }
// )
// .then(data => console.log(data))
// .catch(error => console.error(error));


fetchData();

async function fetchData() {
  try {

    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    const pokemonInfo = document.getElementById("pokemonInfo");
    pokemonInfo.innerHTML = '';

    const name = document.getElementById("name");
    name.textContent = data.name;

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    console.log(data);

    data.types.forEach((type) => {
      const pType = document.createElement("p");
      pType.textContent = `Type: ${type.type.name}`;
      pokemonInfo.appendChild(pType);
    });

    const pHeight = document.createElement("p");
    pHeight.textContent = `Height: ${data.height}`;
    pokemonInfo.appendChild(pHeight);

    const pWeight = document.createElement("p");
    pWeight.textContent = `Weight: ${data.weight}`;
    pokemonInfo.appendChild(pWeight);

  }
   catch (error) {
    console.error(error);
  }
}
