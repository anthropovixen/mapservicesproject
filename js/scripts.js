let pokemonList = [
    {name:'venomoth', height: 4, types: ['bug', 'poison']
    },
    {name: 'charizard', height: 5, types: ['fire', 'flying']
    },
    {name: 'baltoy', height: 1, types: ['ground', 'psychic']
    },
    {name: 'diglett', height: 1, types: 'ground'}
];

for(let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 4) {
        document.write('<p>' + pokemonList[i].name + ' height ' + pokemonList[i].height + ' That\'s a big pokemon!' + '</p>');
    } else if (pokemonList[i].height > 2 && pokemonList[i].height <= 4 ) {
        document.write('<p>' + pokemonList[i].name + ' height ' + pokemonList[i].height + ' That\'s an average pokemon!' + '</p>' );
    } else {
    document.write('<p>' + pokemonList[i].name + ' height ' + pokemonList[i].height + '</p>');
    }
}
