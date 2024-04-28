const pokemons = document.getElementsByClassName("image");
const button = document.createElement("button"); // 버튼 생성
button.innerHTML = '능력치 계산'
button.style = "top:0;left:0;position:fixed;" // 버튼 위치 top-left에 고정
button.onclick = comparePokemons;
document.body.appendChild(button);

for (var i=0; i < pokemons.length; i++) {
    var level = Math.floor(Math.random() * 500) + 1; // 능력치 랜덤 생성
    var pokemon = pokemons.item(i);
    pokemon.setAttribute('id', i+1); // monster 번호
    pokemon.setAttribute('value', level) // 능력치
}

for (var i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons.item(i);
    pokemon.addEventListener('click', function(event) {
        var id = event.target.getAttribute('id');
        var value = event.target.getAttribute('value');
        alert('monster'+ id + '의 능력치는 ' + value + '입니다');
    })
}

function validInput(input) {
    if (input == "" || input < 1 || input > 32) { 
        return false;
    }
    return true;
}

function comparePokemons() {
    const monster1 = prompt("monster1을 선택해주세요. (숫자 입력)");
    const monster2 = prompt("monster2을 선택해주세요. (숫자 입력)");

    if (validInput(monster1) && validInput(monster2)) { // 입력값 올바른지 확인
        const pokemon1 = document.getElementById(monster1);
        const pokemon2 = document.getElementById(monster2);
        const level1 = pokemon1.getAttribute('value');
        const level2 = pokemon2.getAttribute('value');

        var winner = monster1;
        if (level1 < level2) { winner = monster2 } // 능력치 비교
        alert(winner + "이 이깁니다.")
    
    } else { alert("올바른 값이 아닙니다.") }
}
