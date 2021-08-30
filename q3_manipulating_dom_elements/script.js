// USE THOSE VARIABLES TO MODIFY THE DOM ELEMENTS
let header = document.querySelector('h1');
let important = document.querySelector('#important');
let todo = document.querySelector('li.todo');
header.innerText="Hello World"
important.style.backgroundColor = 'red'
todo.style.fontFamily = 'Verdana'
todo.style.fontSize = '16px'
// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}