const quotes = [
    {
        quotes: "무엇이든 처음엔 어렵지만 쉬워지기 마련이다.",
        author: "사디",
    },
    {
        quotes: "똑같은 일을 반복하면서 다른 결과를 원하는 것은 미친 짓이다.",
        author: "아인슈타인",
    },
    {
        quotes: "경험은 가장 훌륭한 스승이다. 다만 학비가 매우 비쌀 뿐이다.",
        author: "T.칼라일",
    },
    {
        quotes: "Start now. Get perfect later.",
        author: "롭 무어",
    },
    {
        quotes: "며칠 뒤에 하겠단 말은 하지 않겠다는 말이다.",
        author: "헨리 조지",
    },
    {
        quotes: "그 일을 하는 데에 최고의 날은 오늘, 그 일을 하는 데 최악의 날은 내일",
        author: "나카타니 아키히로",
    },
    {
        quotes: "연습은 잘하는 사람이 하는 것이 아니라 잘하기 위해 하는 것이다.",
        author: "아웃라이너",
    },
    {
        quotes: "말과 마법은 본래 하나였다. 그리고 지금도 말은 강력한 마력을 지닌다.",
        author: "지그문트 프로이트",
    },
    {
        quotes: "방황을 해야 방향을 찾는다",
        author: "유영만",
    },
    {
        quotes: "목표가 없는 사람은 목표가 있는 사람에 의해 종신 노동형에 처해진다.",
        author: "브라이언 트레이시",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;