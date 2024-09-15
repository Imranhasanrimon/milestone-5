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
function makeRed() {
    document.body.style.background = 'red'
}
function makeBlue() {
    document.body.style.background = 'blue'
}
const blue = document.getElementById('blue');
blue.onclick = makeBlue;