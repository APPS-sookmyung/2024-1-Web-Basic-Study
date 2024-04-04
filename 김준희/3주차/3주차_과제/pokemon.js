let powerList = []; // 전역 변수 powerList

function power() {
  for (let i = 0; i < 32; i++) {
    powerList.push(Math.floor(Math.random() * 201));
  }
  console.log(powerList);
}

// 1~32를 돌며 div 요소를 생성하고 그에 맞는 인덱스, 속성, 배경을 부여
function repeatPokemon() {
  let pokemonsContainer = document.querySelector(".pokemons"); // 부모 요소인 .pokemons 찾기

  for (let i = 0; i < 32; i++) {
    // .pokemon라는 클래스 이름의 div 요소 생성
    const pokemon = document.createElement("div");
    pokemon.setAttribute("power", powerList[i]); // power 속성 부여 (0~200 사이의 랜덤 수)
    pokemon.addEventListener("click", () => {
      alert(
        `${i + 1}번 포켓몬의 공격력은 ${pokemon.getAttribute("power")}입니다.`
      );
    }); // click 이벤트 발생시, pokemon 요소의 power 속성값을 받아온다.
    pokemon.classList.add("pokemon");

    // .image라는 클래스 이름의 div요소 생성
    const image = document.createElement("div");
    image.classList.add("image");
    image.style.backgroundImage = `url('./images/pokemon${i + 1}.png')`; // 배경 이미지 추가
    pokemon.appendChild(image); // .pokemon 요소에 .image를 자식으로 추가
    pokemonsContainer.appendChild(pokemon); // .pokemons 요소에 .pokemon을 자식으로 추가
  }
}

function versus() {
  const first = prompt("대결할 첫 번째 포켓몬을 선택해주세요. (숫자입력)");
  const second = prompt("대결할 두 번째 포켓몬을 선택해주세요. (숫자입력)");
  console.log(`${first}번 포켓몬의 공격력: ${powerList[first - 1]}`);
  console.log(`${second}번 포켓몬의 공격력: ${powerList[second - 1]}`);

  if (powerList[first - 1] > powerList[second - 1]) {
    alert(`${first}번 포켓몬이 이깁니다.`);
  } else {
    alert(`${second}번 포켓몬이 이깁니다.`);
  }
}

power(); // 32개의 요소에 부여할 능력치 난수 생성 - powerList 배열에 저장
repeatPokemon(); // 함수 호출
