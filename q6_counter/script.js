// let incrementBtn = document.querySelector('#increment');
// // let incrementBtn = document.getElementById('increment')

// incrementBtn.addEventListener('click', function(){
//   // 1. Select the element we are interested in 
//   let boxElement = document.querySelector('#box');
// //   2. modify the element 
//   let number = parseInt(boxElement.innerHTML);
//   // => let number = <DOM element object that represent div#box>.innerHTML
//   // => let number = "0"
//   number += 1;
//   // => number = number + 1
//   // => number = "0" + 1
//   // => number = "01"; 
//   console.log(number);

//   boxElement.innerHTML = number;

//   // one liner:
//   // boxElement.innerHTML = parseInt(boxElement.innerHTML) + 1;
// })


let count = 0;
let box = document.querySelector('#box');
box.innerHTML = count;

let plus = document.querySelector('#increment');
addEventListener('click', function(){
    box.innerHTML += count;
}
)

let minus = document.querySelector('#decrement');
addEventListener('click', function(){
    box.innerHTML = count--;
}