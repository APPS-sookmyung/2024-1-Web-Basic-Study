const quotes = [
    {
        quote: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami",

    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",

    },
    {
        quote: "That it will never come again is what makes life so sweet.",
        author: "Emily Dickinson",

    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",

    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",

    },
    {
        quote: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami",

    },
    {
        quote: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
        author: "Voltaire",

    },
    {
        quote: "Be kind, for everyone you meet is fighting a hard battle.",
        author: "Plato",

    },
    {
        quote: "Let me live, love, and say it well in good sentences.",
        author: "Sylvia Plath",

    },
    {
        quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        author: "Stephen King",

    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;