function populate(pokemonChoice, index)
{
    document.getElementById('name').innerHTML = pokemonChoice;
    document.getElementById('photo').src = "assets/build_pokemon/" + pokemonChoice + ".png"
    document.getElementById('pokemonFlavorBox').className = "pokemonFlavorBox";
    document.getElementById('move1').innerHTML = moveNames[index][0];
}

let charizardMoveNames = ['Blaze', 'Memes'];
let wigglyTuffMoveNames = ['Sing', 'Dazzling Gleam'];



let moveNames = [charizardMoveNames, wigglyTuffMoveNames];


/*
when clicking on a playable pokemon it will call populate with both the pokemons name and the index, their order from 0 to last pokemon
there will be arrays that contain the information for each pokemon
flavorText array
moveIcon array
moveName array
moveDescription array
moveCooldown array
stats, info, etc
when a pokemon is clicked it will fill in divs will at the information
there will be 2d arrays that contain all of these arrays
so you can iterate over the arrays like 
to populate charizard's moves (assuming charizard is index 10)
firstMoveIcon.src = moveIcons[10][0]
firsMoveName.innerHTML = moveNames[10][0]
firstMoveDescription.innerHTML = moveDescriptions[10][0]
firstMoveDamage.innerHTML = moveDamages [10][0]
firstMoveCooldown.innerHTML = moveCooldowns[10][0]
and then you would follow through with the rest
*/