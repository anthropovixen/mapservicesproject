// let pokemonList = [
//     {name:'venomoth', height: 4, types: ['bug', 'poison']
//     },
//     {name: 'charizard', height: 5, types: ['fire', 'flying']
//     },
//     {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//     },
//     {name: 'diglett', height: 1, types: 'ground'}
// ];

// pokemonList.forEach (function (pokemon) {
//     document.write('<p>' + 'The ' + pokemon.name + ' is ' + pokemon.height + ' inches tall. ' + '</p>')
// })
// for(let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 4) {
//         document.write('<p>' + pokemonList[i].name + ' height ' + pokemonList[i].height + ' That\'s a big pokemon!' + '</p>');
//     } else if (pokemonList[i].height > 2 && pokemonList[i].height <= 4 ) {
//         document.write('<p>' + pokemonList[i].name + ' height ' + pokemonList[i].height + ' That\'s an average pokemon!' + '</p>' );
//     } else {
//     document.write('<p>' + pokemonList[i].name + ' height ' + pokemonList[i].height + '</p>');
//     }
// }

let PokemonRepository = (function() {
    let pokemonList = [
        {name:'venomoth', height: 4, types: ['bug', 'poison']
        },
        {name: 'charizard', height: 5, types: ['fire', 'flying']
        },
        {name: 'baltoy', height: 1, types: ['ground', 'psychic']
        },
        {name: 'diglett', height: 1, types: 'ground'}
    ];

    function getAll() {
        return pokemonList;
    };

    function add(item) {
        if(typeof(item) === 'object') {
        pokemonList.push(item)
    } else {
        console.log('item must be an object, it was not included on the list')
        }
    }

    return {
        add: add,
        getAll: getAll
    };
    
}) ();

console.log(PokemonRepository.getAll()); //see what's inside the new repository
PokemonRepository.add({name: 'blastoise', height: 5, types: ['grass', 'electric']}); //add new pokemon to the repository
console.log(PokemonRepository.getAll()); // see repository with the alteration


PokemonRepository.getAll().forEach (function (pokemon) {
    document.write('<p>' + 'The ' + pokemon.name + ' pokemon is ' + pokemon.height + ' inches tall. ' + '</p>')
})