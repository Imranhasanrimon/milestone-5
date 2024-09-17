// ______________Module 25______________
// const liCollection = document.getElementsByTagName('li');
// for (let i of liCollection) {
//     console.log(i);

// }
// // console.log(document.getElementsByTagName('h1').innetText);
// const h1Manipulation = document.getElementById('first').innerText = 'DOM'
// console.log(h1Manipulation);
// const mainName = document.getElementsByClassName('main-name');
// console.log(mainName);
// const query = document.querySelectorAll('.parent li');
// console.log(query);
// console.log(document.getElementById('first').style);
// const title = document.getElementById('first');
// console.log(title.getAttribute('class'));
// console.log(title.classList);
// title.classList.remove('atrr');
// console.log(title.classList);
// document.getElementById('first').style.color = 'red';
// document.getElementById('first').setAttribute('title', 'this is tooltip')
// const liStyles = document.querySelectorAll('li');
// for (let i of liStyles) {
//     i.style.border = ('2px solid red')
//     i.style.width = ('50%')
//     i.style.marginBottom = ('10px')
//     i.style.color = 'red'
// }
// // console.log(liStyles);s
// const newLi = document.getElementById('parent');
// const li = document.createElement('li');
// li.innerText = 'Bogura'
// newLi.appendChild(li)

/*           Revision              */
// _______________________________________
// console.log(document);
// const liCollection = document.getElementsByTagName('li')
// for (let i of liCollection) {
//     console.log(i.innerHTML);
// }
// console.log(liCollection);
// const collection = document.getElementsByClassName('main-name');
// // collection.style.color = 'red'
// for (let i of collection) {
//     console.log(i);
// }
// const najmul = document.getElementById('najmul');
// najmul.style.color = 'red'
// console.log(najmul);
// const query = document.querySelector('#parent .main-name');
// for (let i of query) {
//     i.style.color = 'red';
// }
// query.style.color = 'red';
// console.log(query);
// const first = document.getElementById('first')
// first.classList.add('adding')
// console.log(first.classList);
// const list = document.getElementById('parent');
// console.log(list.innerText);
// const lists = document.querySelectorAll('li');
// for (let i of lists) {
//     i.style.border = '2px solid gray'
//     i.style.width = '50%';
//     i.style.padding = '10px 20px'
//     i.style.background = 'white'
//     i.style.marginBottom = '10px'
//     i.style.borderRadius = '5px'
// }
// const naj = document.getElementById('najmul');
// naj.classList.add('bg-pink')
// const sec = document.getElementById('list-section')
// // console.log(sec.childNodes);

// //creating elements
// const newList = document.createElement('li')
// newList.innerText = 'list one'
// console.log(newList);
// // document.getElementById('parent').append(newList)
// console.log(sec.parentNode.parentNode.parentNode);
// console.log(sec.childNodes);

//new section by append
// const where = document.getElementById('list-section');
// const neUl = document.createElement('ul');
// neUl.innerHTML = `
// <li>Rajshahi</li>
// <li>Bogura</li>
// <li>Dhaka</li>
// `;
// where.appendChild(neUl)


/*         Module 26          */
// function makeRed() {
//     document.body.style.background = 'red'
// }
// function makeBlue() {
//     document.body.style.background = 'blue'
// }
// const blue = document.getElementById('blue');
// blue.onclick = makeBlue;

// document.getElementById('purple').addEventListener('click', function () {
//     document.body.style.background = 'purple'
// })

// document.getElementById('btn').addEventListener('click', function () {
//     let textValue = document.getElementById('text');
//     const inp = document.getElementById('input-field');
//     const inpValue = inp.value;
//     textValue.innerText = inpValue;
//     inp.value = ''
// })
// document.getElementById('btn').addEventListener('click', function () {
//     const text = document.getElementById('text-field');
//     const textValue = text.value
//     const commentBox = document.getElementById('comments');
//     const createElement = document.createElement('p');
//     createElement.innerText = textValue;
//     commentBox.append(createElement)
//     text.value = ''
//     text.style.background = 'gray'

// })
// document.getElementById('item-2').addEventListener('click', function (event) {
//     console.log('li is clicked');
//     event.stopPropagation()
//     event.stopImmediatePropagation()
// })
// document.getElementById('item-2').addEventListener('click', function (event) {
//     console.log('li is second clicked');
// })
// document.getElementById('item-2').addEventListener('click', function (event) {
//     console.log('li is third clicked');
// })
// document.getElementById('item-2').addEventListener('click', function (event) {
//     console.log('li is fourth clicked');
// })

// document.getElementById('ul').addEventListener('click', function () {
//     console.log('ul is clicked');
// })
// const items = document.getElementsByClassName('item');
// for (let item of items) {
//     item.addEventListener('click', function (event) {
//         console.log(event.target.parentNode);
//     })
// }

///                      summary m-26

// const heading = document.getElementById('heading');
// console.log(heading);
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);

// const parent = document.querySelector('#items')
// const children = parent.children;
// console.log(parent);
// console.log(children);



/*           Revision              */
// _______________________________________
// document.getElementById('inp').addEventListener('keyup', function (event) {
//     const inpValue = event.target.value;
//     const btn = document.getElementById('btn')
//     if (inpValue === 'delete') {
//         btn.removeAttribute('disabled')
//     } else {
//         btn.setAttribute('disabled', true)
//     }
// })
// document.getElementById('btn').addEventListener('click', function () {
//     document.getElementById('text').style.display = 'none'
// })

// document.getElementById('btn').addEventListener('click', function () {
//     document.getElementById('text').style.color = 'tomato';
//     console.log('clicked');
// })

// document.getElementById('inp').addEventListener('keyup', function (event) {
//     if (event.target.value === 'color') {
//         document.getElementById('btn').removeAttribute('disabled')
//     } else {
//         document.getElementById('btn').setAttribute('disabled', true)
//     }
// })
// document.getElementById('item2').addEventListener('click', function (event) {
//     console.log('item2 first clicked');
//     event.stopImmediatePropagation()
// })
// document.getElementById('item2').addEventListener('click', function (event) {
//     console.log('item2 second clicked');
//     event.stopImmediatePropagation()
// })
// document.getElementById('item2').addEventListener('click', function (event) {
//     console.log('item2 clicked');
//     event.stopPropagation()
// })
// document.getElementById('item2').addEventListener('click', function (event) {
//     console.log('item2 clicked');
//     event.stopPropagation()
// })

// document.getElementById('ul').addEventListener('click', function (stop) {
//     console.log('ul clicked');
//     stop.stopPropagation()

// })

// document.getElementById('sec').addEventListener('click', function () {
//     console.log('section clicked');
// })
// document.getElementById('btn').addEventListener('click', function () {
//     const createElement = document.createElement('p');
//     createElement.innerText = document.getElementById('textarea').value
//     document.getElementById('sec').append(createElement)
//     document.getElementById('textarea').value = ''

// })
// const newElement = document.createElement('div');
// const parent = document.querySelector('.comment');
// const textArea = document.getElementById('textarea')
// parent.insertBefore(newElement, textArea)
// newElement.className = 'bg-black'
// newElement.classList.add('red')

/*           event delegation            */

// const items = document.getElementsByClassName('item');
// for (let item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target)
//     })
// }

// document.getElementById('list-container').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target)

// })

// document.getElementById('btn').addEventListener('click', function () {
//     const listCont = document.getElementById('list-container');
//     const creat = document.createElement('li');
//     creat.innerText = 'adding a new list';
//     creat.classList.add('item')
//     listCont.append(creat)
// })

/*           COCEPTUAL SESSION            */

let count = 0;
let dom = document.getElementById('count').innerText = count;
document.getElementById('reduce').addEventListener('click', function () {

    let dom = document.getElementById('count').innerText = count;
    count--;
    dom = count
})

document.getElementById('add').addEventListener('click', function () {
    let dom = document.getElementById('count').innerText = count;
    count++;
    dom = count
})

