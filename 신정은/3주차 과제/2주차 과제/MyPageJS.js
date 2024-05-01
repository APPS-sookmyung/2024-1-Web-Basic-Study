document.addEventListener("DOMContentLoaded", function(){
    const pokemons = document.querySelectorAll(".container .pokemons .pokemon");
    const comparebutton = document.getElementById("comparebutton");
    const pokemonstat = {};

    function generatestat() {
        return Math.floor(Math.random() *500)+1;
    }

    pokemons.forEach((pokemon, index) => {
        const stat = generatestat();
        const pokemonnum = index;
        pokemonstat[pokemonnum] = stat;
        pokemon.addEventListener("click", function() {
            alert(`monster ${index +1}의 능력치는 ${stat}입니다.`);
        });
    });
    comparebutton.addEventListener("click", function(){
        const stat1 = parseInt(prompt("monster1을 선택해주세요. (숫자 입력)"));
        const stat2 = parseInt(prompt("monster2을 선택해주세요. (숫자 입력)"));
        if(isNaN(stat1)||isNaN(stat2)){
            alert(`값이 올바르지 않습니다.`);
            return;
        }
        
        const monster1stat = pokemonstat[stat1];
        const monster2stat = pokemonstat[stat2];
        if (monster1stat > monster2stat){
            alert(`${monster1stat}이 이깁니다.`);
        } else if (monster1stat<monster2stat){
            alert(`${monster2stat}이 이깁니다.`);
        } else {
            alert(`무승부입니다.`);
        }
    });
});