const pokemons = document.querySelectorAll(".pokemon");

const totalMonsters = 32;
const monsterStats = [];

for (let i = 0; i < totalMonsters; i++) {
  const stats = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
  monsterStats.push(stats);
}

pokemons.forEach((pokemon, index) => {
  pokemon.addEventListener("click", () => {
    const stats = monsterStats[index];
    alert(`monster ${index + 1}의 능력치는 ${stats}입니다.`);
  });
});

function compareMonsters(monster1Index, monster2Index) {
  if ((monster1 && monster2) < 0 || (monster1 && monster2) > 31) {
    alert("잘못된 입력입니다. 1부터 32 사이의 숫자를 입력하세요.");
    return;
  }

  const monster1Stats = monsterStats[monster1Index - 1];
  const monster2Stats = monsterStats[monster2Index - 1];

  if (monster1Stats > monster2Stats) {
    alert(`${monster1Index}이 이깁니다.`);
  } else if (monster2Stats > monster1Stats) {
    alert(`${monster2Index}이 이깁니다.`);
  } else {
    alert("무승부입니다.");
  }
}

// 버튼 클릭 시 두 몬스터의 능력치 비교 함수 실행
const compareButton = document.getElementById("compareButton");
compareButton.addEventListener("click", () => {
  const monster1Index = parseInt(prompt("첫 번째 몬스터 번호를 입력하세요:"));
  const monster2Index = parseInt(prompt("두 번째 몬스터 번호를 입력하세요:"));
  compareMonsters(monster1Index, monster2Index);
});
