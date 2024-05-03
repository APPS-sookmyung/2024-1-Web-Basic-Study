// 모든 포켓몬 요소를 가져와서 배열로 만들기
const pokemonElements = Array.from(document.querySelectorAll(".pokemon"));

// 포켓몬 능력치 배열 생성
const pokemonStats = [];

// 포켓몬 수 만큼 반복하여 각 포켓몬의 능력치를 생성
for (let i = 0; i < pokemonElements.length; i++) {
  // 각 포켓몬의 능력치 생성해 배열에 추가
  pokemonStats.push(Math.floor(Math.random() * 1000) + 1); // 무작위 수
}

// 포켓몬 클릭 이벤트 리스너 추가
pokemonElements.forEach((pokemonElement, index) => {
  pokemonElement.addEventListener("click", () => {
    const pokemonStat = pokemonStats[index];
    alert(`포켓몬 ${index + 1}의 능력치: ${pokemonStat}`);
  });
});

function compareStats() {
  var stats1 = parseInt(prompt("monster1를 선택해주세요.(숫자 입력)"));
  var stats2 = parseInt(prompt("monster2를 선택해주세요.(숫자 입력)"));

  //isNaN() 함수는 JavaScript에서 사용되는 숫자 아닌 값 판별하는 내장 함수
  if (isNaN(stats1) || isNaN(stats2)) {
    alert("값이 올바르지 않습니다.");
    return;
  }

  if (stats1 > stats2) {
    alert(stats1 + "이 이깁니다.");
  } else if (stats1 < stats2) {
    alert(stats2 + "이 이깁니다.");
  } else {
    alert("두 포켓몬의 능력치가 같습니다");
  }
}
