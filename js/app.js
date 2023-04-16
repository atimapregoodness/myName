


const firstName = prompt("enter your first name").toUpperCase()
const lastName = prompt('enter your last name').toUpperCase()

const first = document.querySelector('#first')
const last = document.querySelector('#second')
const name1 = document.querySelector('#first-name')
const name2 = document.querySelector('#last-name')
const abri1 = document.querySelector('#name')
const abri2 = document.querySelector('#abri')

first.innerText += firstName;
last.innerText += lastName;

name1.innerText += first.innerText;
name2.innerText += last.innerText;

abri1.innerText += first.innerText;
abri2.innerText += last.innerText[0];



