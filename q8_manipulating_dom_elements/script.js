let a=document.querySelectorAll('.emphasis')
for (s of a){
    s.style.fontFamily="verdana"
}

let b=document.querySelectorAll('li.finished')
for (c of b){
    c.style.textDecoration="line-through"
}

let d=document.querySelectorAll('ul#low-priority>li.todo')
    for (e of d){
        e.style.backgroundColor="blue"
}

let f=document.querySelectorAll('.alert')
for (g of f){
    g.style.color="red"
}