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
    const itemCheck = (item) => {
        console.log('Types: ', item['types']);

        const itemArray = item['name'] !==undefined && item['height'] !== undefined && Array.isArray(item['types']) === true;
        
        return itemArray;
    }

    function add(pokemon) {
        if(itemCheck(pokemon)) {
        repository.push(pokemon)
    } else {
        throw('item must be an object, it was not included on the list')
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
        const button = document.createElement('button');
        button.innerText = pokemon.name;

        // add class to button to style it with css
        button.classList.add('buttonStyle');

        // call function with details on pokemon on click:
        addButtonEvent(button, pokemon);

        // append button to the list item
        listPokemon.appendChild(button);

        // append list item to the unordered list
        newList.appendChild(listPokemon);
    }   

    // External function to add Event on click of button with pokemon's names to print on console their details:
    const addButtonEvent = (button, pokemon) => (
        button.addEventListener('click', function() {
            ShowDetails(pokemon);
        })
    )

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
}) ();

console.log(PokemonRepository.getAll()); //see what's inside the new repository
PokemonRepository.add({name: 'blastoise', height: 5, types: ['grass', 'electric']}); //add new pokemon to the repository

// PokemonRepository.add({height: 5, types: ['grass', 'electric']}); // pokemon with error to test itemCheck function

console.log(PokemonRepository.getAll()); // see repository with the alteration

PokemonRepository.getAll().forEach (function (pokemon) {
    PokemonRepository.addListItem(pokemon);
});


        // //  This is a correct answer for exercise 1.6, basic way. We are adding an Event Listener
        // // to buttons with pokemon's names and calling back the function to show their details on console:
        // // Create event so that a click on a pokemon button can be heard
        // // and the function ShowDetails can be executed
        // button.addEventListener('click', function() {
        //     ShowDetails(pokemon);
        // });

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

// Code from exercise 1.5 to add pokemons to list of pokemons.
// document.write('<p>' + 'The ' + pokemon.name + ' pokemon is ' + pokemon.height + ' inches tall. ' + '</p>')
