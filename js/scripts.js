let PokemonRepository = (function() {
    let repository = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // function to validate information of pokemons to be added. It must be an object and it must have three fields,
    //will show message at console.
    const itemCheck = (item) => {
        
        const itemArray = item['name'] !==undefined;
        
        return itemArray;
    }
    // Check if pokemon has the correct data to be part of the list. If it doesn't, then error message.
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
    
    // // Show the modal content
    // function showModal (pokemon) {
    //     let modalBody = $(".modal-body");
    //     let modalTitle = $(".modal-title");
    //     let modalHeader = $(".modal-header");
    //     // clear existing content of the model
    //     modalTitle.empty();
    //     modalBody.empty();

    //     // create element for name in modal content
    //     let nameElement = $('<h1>' + pokemon.name + '</h1>');
    //     //  create img in modal content
    //     let imageElementFront = $('img class="modal-img" style="width:50%">');
    //     imageElementFront.attr("src", pokemon.imageUrlFront);
    //     let imageElementBack = $('<img class="modal-img" style="width:50%">');
    //     imageElementBack.attr("src", pokemon.imageUrlBack);
    //     // create element for heigth in modal content
    //     let heightElement = $('<p>' + "height : " + pokemon.height + '</p>');
    //     //  create element for type in modal content
    //     let typesElement = $('<p>' + "types : " + pokemon.types + '</p>');

    //     modalTitle.append(nameElement);
    //     modalBody.append(imageElementFront);
    //     modalBody.append(imageElementBack);
    //     modalBody.append(heightElement);
    //     modalBody.append(typesElement);
    // }

    // Show modal with information on pokemon clicked
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
        let imageElementFront = document.createElement('img');
        imageElementFront.src = pokemon.imageUrlFront;
        
        //Add description to modal
        let contentElementHeight = document.createElement('p');
        contentElementHeight.innerText = 'Height: ' + pokemon.height;
        let contentElementTypes = document.createElement('p');
        let types = ' ';
        pokemon.types.map(({ type }) => types = types + ' ' + type.name);
        contentElementTypes.innerText = 'Types: ' + types;

        //Append new elements to modal
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(imageElement);
        modal.appendChild(contentElementHeight);
        modal.appendChild(contentElementTypes);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }                   
    // Close modal when clicking on X, escape or outside modal
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
    // Add function to buttons with pokemon's names to open Modal
    const addButtonEvent = (button, pokemon) => (
        button.addEventListener('click', function() {
            showDetails(pokemon);
        })
    )
    // Fetch details of pokemon from API
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
    //Load details of pokemons from API to Modal
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            pokemon.imageUrlFront = details.sprites.front_default;
            pokemon.imageUrlBack = details.sprites.back_default;
            pokemon.height  = details.height;
            pokemon.types = details.types;
            return pokemon
        }).catch(function (e) {
            console.error(e);
        });
    }
    //Show details of pokemon on console and on Modal
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

console.log(PokemonRepository.getAll()); // see repository with the alteration

PokemonRepository.loadList().then(function() {
    PokemonRepository.getAll().forEach (function (pokemon) {
        PokemonRepository.addListItem(pokemon);
    });
});