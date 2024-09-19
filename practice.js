const quotesArray = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "To be great is to be misunderstood.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    }
];

document.getElementById('newquote').addEventListener('click', function () {
    // random number 1-10 
    const indexRandom = Math.floor(Math.random() * 10);

    //Quote manupulation
    document.getElementById('quote').innerText = `"${quotesArray[indexRandom].quote}"`;
    document.getElementById('author').innerText = quotesArray[indexRandom].author;
})