const monsters = document.getElementsByClassName("monster");

const totalMonsters = 32;
const monsterStrengths = Array.from({ length: totalMonsters }, () => Math.floor(Math.random() * (300 - 50 + 1)) + 50);

Array.from(monsters).forEach((monster, index) => {
    monster.addEventListener('click', () => {
        const strength = monsterStrengths[index];
        console.log(`몬스터 ${index + 1}의 힘은 ${strength}입니다.`);
alert(`몬스터 ${index + 1}의 힘은 ${strength}입니다.`);
    });
});

function compare(monster1, monster2) {
    if (!isValidInput(monster1) || !isValidInput(monster2)) {
        console.log("잘못된 입력입니다. 1부터 32 사이의 숫자를 입력하세요.");
        alert("잘못된 입력입니다. 1부터 32 사이의 숫자를 입력하세요.");
        return;
    }

    const monster1Strength = monsterStrengths[monster1 - 1];
    const monster2Strength = monsterStrengths[monster2 - 1];

    if (monster1Strength > monster2Strength) {
        console.log(`${monster1}이 이겼습니다.`);
        alert(`${monster1}이 이겼습니다.`);
    } else if (monster2Strength > monster1Strength) {
        console.log(`${monster2}이 이겼습니다.`);
        alert(`${monster2}이 이겼습니다.`);
    } else {
        console.log("무승부입니다.");
        alert("무승부입니다.");
    }
}

button.onclick = function() {
    const monster1 = +prompt("monster1을 선택해주세요. (숫자 입력)");
    const monster2 = +prompt("monster2을 선택해주세요. (숫자 입력)");
    compareMonsters(monster1, monster2);
};

