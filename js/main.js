const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "I always wanted to be somebody, but now I realize I should have been more specific.",
    "I don't always surf the internet, but when I do, eyebrows.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I used to think I was indecisive, but now I'm not sure.",
    "A clear conscience is a sure sign of a bad memory.",
    "I may be a terrible person, but at least I'm not a hypocrite.",
    "Behind every great man is a woman rolling her eyes."
];

const quoteElem = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function setQuote() {
    quoteElem.textContent = getRandomQuote();
}

newQuoteBtn.addEventListener('click', setQuote);

setQuote();
