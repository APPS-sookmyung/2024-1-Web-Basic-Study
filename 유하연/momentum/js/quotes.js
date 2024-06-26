const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
