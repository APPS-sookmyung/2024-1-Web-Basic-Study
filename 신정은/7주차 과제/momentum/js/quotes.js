const quotes = [
    {
        quote: "Lean liberty is better than fat slavery.",
        author: "John Ray",
    },
    {
        quote: "Always read stuff that will make you look good if you die in the middle of it.",
        author: "P. J. O'Rourke",
    },
    {
        quote: "If I have lost confidence in myself, I have the universe against me.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "A likely impossibility is always preferable to an unconvincing possibility.",
        author: "Aristotle",
    },
    {
        quote: "Be silent as to services you have rendered, but speak of favours you have received.",
        author: "Seneca",
    },
    {
        quote: "A single day is enough to make us a little larger.",
        author: "Paul Klee",
    },
    {
        quote: "This time, like all times, is a very good one, if we but know what to do with it.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
        author: "Helen Keller",
    },
    {
        quote: "Keep your face to the sunshine and you cannot see the shadow.",
        author: "Helen Keller",
    },
    {
        quote: "Improvements are invented only by those who can feel that something is not good.",
        author: "Friedrich Nietzsche",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;