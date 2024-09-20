// random quote project 
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
    document.getElementById('quote').style.cssText = 'color: red;'
})

//to do list (H.W)
let index = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('text-field').value;
    const table = document.getElementById('table');
    const td = document.createElement('tr');
    td.innerHTML = `
    <td>${index += 1}</td> 
    <td>${inputValue}</td> 
    <td><button class="text-red-500">Delete</button></td>
    `;
    td.setAttribute('id', `index${index}`);
    td.classList.add('delete')
    table.querySelector('tbody').append(td)



    document.getElementById('text-field').value = '';
})
//add by enter
document.getElementById('text-field').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const inputValue = document.getElementById('text-field').value;
        const table = document.getElementById('table');
        const td = document.createElement('tr');
        td.innerHTML = `
        <td>${index += 1}</td> 
        <td>${inputValue}</td> 
        <td><button class="text-red-500">Delete</button></td>
        `;
        td.setAttribute('id', `index${index}`);
        td.classList.add('delete')
        table.querySelector('tbody').append(td)



        document.getElementById('text-field').value = '';
    }
})
/*      clear all button event      */
document.getElementById('clear-all-btn').addEventListener('click', function () {
    const table = document.getElementById('table').querySelectorAll('.delete');
    const tableArray = Array.from(table)
    for (let td of tableArray) {
        td.classList.add('hidden');
    }
    index = 0;
});
/*      single delete button event      */

