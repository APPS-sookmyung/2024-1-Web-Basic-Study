document.addEventListener("DOMContentLoaded", function () {
  const pokemons = document.querySelectorAll(".container .pokemons .pokemon");
  const compareButton = document.getElementById("calculate");

  // 포켓몬 능력치를 저장
  const pokemonStats = {};

  // 포켓몬 능력치를 생성 1부터 1000
  function generateRandomStats() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  // 각 포켓몬에 번호와 능력치를 부여하고 클릭 이벤트 추가
  pokemons.forEach((pokemon, index) => {
    const stat = generateRandomStats();
    const pokemonNumber = index;
    pokemonStats[pokemonNumber] = stat; // 포켓몬 번호와 능력치를 매핑
    pokemon.addEventListener("click", function () {
      alert(`monster${pokemonNumber}의 능력치는 ${stat}입니다.`);
    });
  });

  // 버튼 클릭시 비교하고, 범위에 어긋나면 다시 오류뜨기
  compareButton.addEventListener("click", function () {
    const monster1 = parseInt(prompt("monster1을 선택해주세요. (숫자 입력)"));
    const monster2 = parseInt(prompt("monster2을 선택해주세요.(숫자입력)"));

    if (
      isNaN(monster1) ||
      isNaN(monster2) ||
      monster1 < 0 ||
      monster1 >= pokemons.length ||
      monster2 < 0 ||
      monster2 >= pokemons.length
    ) {
      alert(`값이 올바르지 않습니다.`);
      return;
    }

    const monster1Stat = pokemonStats[monster1];
    const monster2Stat = pokemonStats[monster2];

    if (monster1Stat > monster2Stat) {
      alert(`몬스터 ${monster1} 이 이깁니다`);
    } else if (monster1Stat < monster2Stat) {
      alert(`몬스터 ${monster2} 이 이깁니다.`);
    } else {
      alert("능력치가 동일합니다");
    }
  });
});
