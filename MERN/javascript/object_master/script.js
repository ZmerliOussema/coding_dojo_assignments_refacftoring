const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
    const pokemonIdDivBy3 = pokémon.filter(item => item.id % 3 === 0);
    // console.log(pokemonIdDivBy3);

// an array of pokémon objects that are "fire" type
    const pokemonByFireType = pokémon.filter (item => item.types.includes("fire"));
    // console.log(pokemonByFireType);

// an array of pokémon objects that have more than one type
    const pokemonMoreOneTypes = pokémon.filter (item => item.types.length > 1);
    // console.log(pokemonMoreOneTypes);

// an array with just the names of the pokémon
    const pokemonNames = pokémon.map (item => item.name)
    // console.log(pokemonNames);

// an array with just the names of pokémon with an id greater than 99
    const pkmNamesAndIdGreater99 = pokémon.filter(item => item.id > 99).map(item => item.name)
    // console.log(pkmNamesAndIdGreater99);

// an array with just the names of the pokémon whose only type is poison
    const pkmNamesTypePoison = pokémon.filter (item =>  item.types == "poison").map(item => item.name);
    // console.log(pkmNamesTypePoison);

// an array containing just the first type of all the pokémon whose second type is "flying"
    const pkmSecFlying = pokémon.filter (item => item.types.includes('flying')).map(item => item.types[0])
    // console.log(pkmSecFlying);

// a count of the number of pokémon that are "normal" type
    let countPkmByNormalType = pokémon.filter (item => item.types == "normal").length
    // console.log(countPkmByNormalType);

