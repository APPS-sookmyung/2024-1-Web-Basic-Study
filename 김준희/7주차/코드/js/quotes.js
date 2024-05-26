const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Love asks me no questions, and gives me endless support.",
    author: "William Shakespeare",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "The die is cast.",
    author: "Julius caesar",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Gail Winfrey",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
