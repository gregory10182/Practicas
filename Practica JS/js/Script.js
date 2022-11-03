const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("nombre");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pokemon-sad.gif")
            pokeType('none');
            pokeMoves('none', 'none');
            pokeStats('0', '0', '0', '0', '0', '0');
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeT = data.types[0].type.name;
            let pokeM1 = data.abilities[0].ability.name;
            let pokeM2 = data.abilities[1].ability.name;
            let hp = data.stats[0].base_stat;
            let atk = data.stats[1].base_stat;
            let def = data.stats[2].base_stat;
            let spatk = data.stats[3].base_stat;
            let spdef = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            pokeImage(pokeImg);
            pokeType(pokeT);
            pokeMoves(pokeM1, pokeM2);
            pokeStats(hp, atk, def, spatk, spdef, speed);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


const pokeType = (tipo) => {
    const type = document.getElementById("tipo");
    type.innerHTML = tipo;
}

const pokeMoves = (m1, m2) => {
    const moves = document.getElementById("movimientos");
    moves.innerHTML = m1 + ', ' + m2;
}

const pokeStats = (hp, atk, def, spatk, spdef, speed) => {
    const health = document.getElementById("HP");
    const attack = document.getElementById("ATK");
    const defense = document.getElementById("DEF");
    const sp_attack = document.getElementById("SPATK");
    const sp_defense = document.getElementById("SPDEF");
    const speedy = document.getElementById("SPEED");

    health.innerHTML = hp;
    attack.innerHTML = atk
    defense.innerHTML = def
    sp_attack.innerHTML = spatk
    sp_defense.innerHTML = spdef
    speedy.innerHTML = speed


}