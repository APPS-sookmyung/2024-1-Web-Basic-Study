
function pokelevel() {
    Math.floor(Math.random() * 31) + 1;
}

pokemonlev.forEach ((pokemon, index) => {
    const level = pokelevel();
    const num = index;
    pokelevel[num] = level;
    pokemon.addEventListener("click", function() {
        alert('monster ${index+1} 의 능력치는 ${level}입니다')
    });

});

comparebox.addEventListener("click", function() {
    const a = parseInt(prompt("moster1을 선택해주세요.(숫자 입력)"));
    const b = parseInt(prompt("moster2을 선택해주세요.(숫자 입력)"));

    if ( pokelevel[a-1] > pokelevel[b-1]) {
        alert(a + "가 이깁니다.");
    } else if (pokelevel[a-1] < pokelevel[b-1]) {
        alert(b + "가 이깁니다.");
    } else {
        alert("값이 올바르지 않습니다.")
    }
});