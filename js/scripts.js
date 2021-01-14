let PokemonRepository = (function() {
    let repository = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // function to validate information of pokemons to be added. It must be an object and it must have three fields,
    //will show message at console.
    const itemCheck = (item) => {
        
        const itemArray = item['name'] !==undefined;
        
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

    function showModal(pokemon) {
        let modalContainer = document.querySelector('#modal-container');

        //Clear existing modal content
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        //Add the new modal close button
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        //Add title to modal
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;
        
        //Add image of the pokemon to modal
        let imageElement = document.createElement('img');
        imageElement.src = pokemon.imageUrl;
        
        //Add description to modal
        let contentElement = document.createElement('p');
        contentElement.innerText = pokemon.name + ' is ' + pokemon.height + ' inches tall.'

        //Append new elements to modal
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(imageElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }                   

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });
    
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        };
    });

    const addButtonEvent = (button, pokemon) => (
        button.addEventListener('click', function() {
            showDetails(pokemon);
        })
    )

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    height: item.height,
                    types: item.types
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
                console.error(e);
        })
    }

    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height  = details.height;
            pokemon.types = details.types;
            return pokemon
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function (response) {
            console.log(response);
            showModal(response);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }
}) ();

// function ShowModal() {
//     let modalContainer = document.querySelector('#modal-container');
//     modalContainer.classList.add('is-visible');
// }

// const addButtonEvent = (button, pokemon) => (
//     button.addEventListener('click', function() {
//         showModal(pokemon);
//     })
// )

// PokemonRepository.add({name: 'blastoise', height: 5, types: ['grass', 'electric']}); //add new pokemon to the repository

// PokemonRepository.add({height: 5, types: ['grass', 'electric']}); // pokemon with error to test itemCheck function

console.log(PokemonRepository.getAll()); // see repository with the alteration

PokemonRepository.loadList().then(function() {
    PokemonRepository.getAll().forEach (function (pokemon) {
        PokemonRepository.addListItem(pokemon);
    });
});



// // This snippet of code was used at 1.6 to check that the items added to the repository had the info needed.
// && item['height'] !== undefined && Array.isArray(item['types']) === true;

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
