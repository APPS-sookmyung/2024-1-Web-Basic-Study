const quotes=[
    {
        quotes: "1",
        author: "a",
    },
    {
        quotes: "2",
        author: "b",
    },
    {
        quotes: "3",
        author: "c",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quotes.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;