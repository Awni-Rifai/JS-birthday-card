'use strict'
const container=document.querySelector('.container');
const body=document.querySelector('body');
const numberOfPersons=document.querySelector('.num-person');

const persons=[
    {
        name:'Haithem',
        img:'https://randomuser.me/api/portraits/men/15.jpg',
        age:23,
        dop:'15 Jun 1997'
    },
    {
        name:'Esraa',
        img:'   ',
        age:24,
        dop:'24 Oct 1997'
    },
    {
        name:'Dania',
        img:'https://randomuser.me/api/portraits/women/10.jpg',
        age:24,
        dop:'16 Oct 1997'
    },
    {
        name:'mohammed',
        img:'https://randomuser.me/api/portraits/men/10.jpg',
        age:21,
        dop:'14 Oct 2000'
    },
]

let counter=0;
persons.forEach(person=>{
    const markup=`<div class="birthday-container">
    <img src=${person.img} alt="" srcset="" >
    <div>
        <h3>${person.name}</h3>
        <small>${person.age}</small>
    </div>
   

</div>`
let string=new Date().toString();
// get the date 
const day=string.slice(8,11)+string.slice(4,7);

if(person.dop.includes(day)){
    counter++;
    container.insertAdjacentHTML("beforeend",markup);
}
numberOfPersons.innerText=counter;



})
container.insertAdjacentHTML('beforeend','<button class="clear-all">clear all</button>')
const clearAll=document.querySelector('.clear-all');
const btns=document.querySelector('.btns');
btns.addEventListener('click',function(e){
    const color=e.target.innerText;
    
    body.style.backgroundColor=color;
    clearAll.style.backgroundColor=color;

})
clearAll.addEventListener('click',function(){
    container.innerHTML="";
    container.innerHTML='<h1><span class="num-person"></span>0 Birthdays Today</h1>'
})