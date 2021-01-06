let PokemonRepository = (function() {
    let repository = [
        {
        name:'venomoth', 
        height: 4, 
        types: ['bug', 'poison']
        },
        {
        name: 'charizard',
        height: 5,
        types: ['fire', 'flying']
        },
        {
        name: 'baltoy',
        height: 1,
        types: ['ground', 'psychic']
        },
        {
        name: 'diglett',
        height: 1, 
        types: 'ground'
    }
    ];

    // function to validate information of pokemons to be added. It must be an object and it must have three fields,
    //will show message at console.
    
    function add(pokemon) {
        if(typeof(pokemon) === 'object') {
        repository.push(pokemon)
    } else if (Object.keys(pokemon) === 'name', 'height', 'types') {
        repository.push(pokemon)
    } else {
        console.log('item must be an object, it was not included on the list')
        }
    }

    function getAll() {
        return repository;
    };

    // create function to show details of pokemon when clicked on
    function ShowDetails(pokemon) {
        // Log the data from pokemon
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        // create new variable for ul added at 'index.html' file
        let newList = document.querySelector('.pokemon-list');

        // create il element
        let listPokemon = document.createElement('li');

        // create button with pokemon's names for each element
        let button = document.createElement('button');
        button.innerText = pokemon.name;

        // add class to button to style it with css
        button.classList.add('buttonStyle');

        // append button to the list item
        listPokemon.appendChild(button);

        // append list item to the unordered list
        newList.appendChild(listPokemon);

        
        // //  This is a correct answer for exercise 1.6:
        // // Create event so that a click on a pokemon button can be heard
        // // and the function ShowDetails can be executed
        // button.addEventListener('click', function() {
        //     ShowDetails(pokemon);
        // });
    }   

        // attempt at advanced task:
        let button = document.querySelector('ul');
        button.addEventListener('click', function (pokemon) {
            ShowDetails(pokemon);
        })

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
}) ();

console.log(PokemonRepository.getAll()); //see what's inside the new repository
PokemonRepository.add({name: 'blastoise', height: 5, types: ['grass', 'electric']}); //add new pokemon to the repository
console.log(PokemonRepository.getAll()); // see repository with the alteration

PokemonRepository.getAll().forEach (function (pokemon) {
    PokemonRepository.addListItem(pokemon);
});



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

// Code previous to exercise 1.6 to add pokemons to list of pokemons.
// document.write('<p>' + 'The ' + pokemon.name + ' pokemon is ' + pokemon.height + ' inches tall. ' + '</p>')

// // Attempt 1 Filter() function
// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];

// let namesFiltered = PokemonRepository.filter(queryNames => queryNames.name == 'venomoth');

// console.log(namesFiltered);

// })();

// //Attempt 2 Filter() function
// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];
    
//     function namesFiltered(name) {
//         return PokemonRepository.name = 'venomoth'
//     }

// })();

// console.log(namesFiltered);

// //Attempt 3 Filter() function

// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];
    
//     function namesFiltered(name) {
//         return PokemonRepository.name = 'venomoth'
//     }

// console.log(namesFiltered);

// })();

// //Attempt 4 Filter() function

// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];
    
//     function namesFiltered(name) {
//         return PokemonRepository.name = 'venomoth'
//     }

// let filtered = PokemonRepository.filter(namesFiltered);

// console.log(filtered);

// })();

// //Attempt 5 Filter() function

// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];
    
//     function namesFiltered(arr, query) {
//         return arr.filter(function(el) {
//             return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     } )
// }

// console.log(namesFiltered(PokemonRepository, 'venomoth'));

// })();

// //Attempt 6 Filter() function

// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];
    
//     function namesFiltered(array, query) {
//         return array.filter(function(el) {
//             return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     } )
// }

// console.log(namesFiltered(PokemonRepository, 'e'));

// })();

// //Attempt 7 at Filter() function

// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];
    
//     var namesFiltered  = PokemonRepository.filter(function (el) {
//         return el.name != ' ';
//     }
//     ) ;

//     console.log(namesFiltered);

// })();   

// //Attempt 8 Filter() function

// let PokemonRepository = (function() {
//     let pokemonList = [
//         {name:'venomoth', height: 4, types: ['bug', 'poison']
//         },
//         {name: 'charizard', height: 5, types: ['fire', 'flying']
//         },
//         {name: 'baltoy', height: 1, types: ['ground', 'psychic']
//         },
//         {name: 'diglett', height: 1, types: 'ground'}
//     ];
    
//     function namesFiltered(name) {
//         return PokemonRepository.name != ' ';
//     }

// let filtered = PokemonRepository.filter(namesFiltered);

// console.log(filtered);

// })();