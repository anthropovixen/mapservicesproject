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
    document.write('<p>' + pokemonList[i].name + ' ' + 'height' + ' ' + pokemonList[i].height) + '</p>';
}

document.write(pokemonList);
pokemonList[0];
pokemonList[0].height;
pokemonList[0].types[1];
