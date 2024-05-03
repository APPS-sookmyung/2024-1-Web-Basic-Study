const pokemonlist = document.querySelectorAll(".container .pokemons .pokemon");
const pokemonstats = {};

function randomstats() {
  return Math.floor(Math.random() * 300 + 1);
}

for (let i = 0; i < pokemonlist.length; i++ ) {
  const stat = randomstats()
  pokemonstats[i] = stat;
}

pokemonlist.forEach((pokemon, index) => {
  const stat = pokemonstats[index];
  const number = index;
  pokemon.addEventListener("click", function () {
    alert(`monster${number+1}의 능력치는 ${stat}입니다.`);
  });
});


function compare() {
  const monster1 = parseInt(prompt("monster1을 선택해주세요. (숫자 입력)"));
  const monster2 = parseInt(prompt("monster2을 선택해주세요. (숫자 입력)"));
  if (
    isNaN(monster1 && monster2) || (monster1 && monster2) < 0 ||  (monster1 && monster2) >= 32 || monster1 == monster2
  ) {
    alert(`값이 올바르지 않습니다.`);
    return;
  }

  const monster1stat = pokemonstats[monster1-1];
  const monster2stat = pokemonstats[monster2-1];
 
  if (monster1stat > monster2stat) {
    alert(`몬스터 ${monster1} 이 이깁니다`);
  } else if (monster1stat < monster2stat) {
    alert(`몬스터 ${monster2} 이 이깁니다.`);
  } else {
    alert("능력치가 동일합니다");
  }
}

