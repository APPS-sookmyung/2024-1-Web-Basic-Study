// 포켓몬 능력치를 생성하는 함수
function generateStats() {
  return Math.floor(Math.random() * 100) + 1; // 1부터 100까지의 난수 생성
}

// 각 포켓몬의 이미지 요소들을 가져오기
const pokemonImages = document.querySelectorAll('.pokemon .image');

// 각 포켓몬에 능력치를 할당
pokemonImages.forEach((image, index) => {
  // 포켓몬을 클릭할 때마다 능력치를 재할당
  image.addEventListener('click', () => {
    const ability = generateStats();
    alert(`${pokemons[index]}의 능력치: ${ability}`);
  });
});

// "능력치 계산" 버튼을 동적으로 생성
const calculateButton = document.createElement('button');
calculateButton.textContent = '능력치 계산';
calculateButton.id = 'calculateBtn';

// "container" 요소에 "능력치 계산" 버튼 추가
document.querySelector('.container').appendChild(calculateButton);

// 포켓몬 목록
const pokemons = Array.from({ length: 32 }, (_, index) => (index + 1).toString());

// 포켓몬 인덱스를 입력받는 함수
function selectPokemon() {
  const pokemon1Index = parseInt(prompt('monster1을 선택해주세요(숫자입력)'));
  const pokemon2Index = parseInt(prompt('monster2를 선택해주세요(숫자입력)'));

  // 유효한 인덱스인지 확인
  if (isNaN(pokemon1Index) || isNaN(pokemon2Index) || pokemon1Index < 1 || pokemon1Index > pokemons.length || pokemon2Index < 1 || pokemon2Index > pokemons.length) {
    alert('값이 올바르지않습니다.');
    return;
  }

  return [pokemon1Index - 1, pokemon2Index - 1]; // 배열 인덱스는 0부터 시작하므로 입력값에서 1을 뺍니다.
}

// "능력치 계산" 버튼에 이벤트 추가
calculateButton.addEventListener('click', () => {
  const selectedPokemonIndexes = selectPokemon();
  if (!selectedPokemonIndexes) return;

  const [index1, index2] = selectedPokemonIndexes;
  const ability1 = generateStats();
  const ability2 = generateStats();
  
  if (ability1 > ability2) {
    alert(`${pokemons[index1]}이 이겼습니다!`);
  } else if (ability1 < ability2) {
    alert(`${pokemons[index2]}이 이겼습니다!`);
  } else {
    alert('무승부입니다!');
  }
});
