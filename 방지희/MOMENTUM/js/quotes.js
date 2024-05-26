const quotes = [
    {
        quote: "The absence of flaw in beauty is itself a flaw",
        author: "Havelock Ellis",
    },
    {
        quote: "Life's a vayage that's homeward bound",
        author: "Herman Melville",
    },
    {
        quote: "Nothing is a waste of time if you use the experience wisely",
        author: "Auguste Rodin",
    },
    {
        quote: "An artist is somebody who produces things that people don't need to have",
        author: "Andy Warhol",
    },
    {
        quote: "Food is the most primitive form of comfort",
        author: "Sheila Graham",
    },
    {
        quote: "A wise man will make more opportunities than he finds",
        author: "Sir Francis Bacon",
    },
    {
        quote: "Whenever I hear, 'It can't be done', I know I'm close to success",
        author: "Michael Flatley",
    },
    {
        quote: "A misery is not to be measured from the nature of the evil, but from the temper of the sufferer",
        author: "Joseph Addison",
    },
    {
        quote: "Love is a gross exaggeration of the difference between one person and everyone else",
        author: "William Shakespeare",
    },
    {
        quote: "He that can have patience can have what he will",
        author: "Benjamin Franklin",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = console.log(quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;