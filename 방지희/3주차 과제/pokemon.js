const pokemons = Array.from(document.querySelectorAll(".container .pokemons .pokemon"));

const pokemonStats = {};

function randomStats() {
    return Math.floor(Math.random() * 300) + 100;
}

pokemons.forEach((pokemon, index) => {
    const stat = randomStats();
    const pokemonNumber = index;
    pokemonStats[pokemonNumber] = stat;
    pokemon.addEventListener("click", function () {
        alert('monster'+pokemonNumber+'의 능력치는 '+stat+'입니다.');
    });
});

calculateButton.addEventListener("click", function () {
    const monster1 = parseInt(prompt("monster1을 선택해주세요. (숫자 입력)"));
    const monster2 = parseInt(prompt("monster2를 선택해주세요. (숫자 입력)"));

    if (
        isNaN(monster1) ||
        isNaN(monster2) ||
        monster1 < 0 ||
        monster1 >= pokemons.length ||
        monster2 < 0 ||
        monster2 >= pokemons.length
    ) {
        alert('값이 올바르지 않습니다.');
        return;
    }

    const monster1Stat = pokemonStats[monster1];
    const monster2Stat = pokemonStats[monster2];

    if (monster1Stat > monster2Stat) {
        alert('몬스터 '+monster1+' 이 이깁니다.');
    } else if (monster1Stat < monster2Stat) {
        alert('몬스터 '+monster2+' 이 이깁니다.');
    } else {
        alert("능력치가 동일합니다.");
    }
});