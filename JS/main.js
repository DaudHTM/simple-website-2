
var am = ['Youtuber', 'Student','Web Dev','Roboticist','Body Builder'];
let x=0;


const textAm=document.getElementById('pos')
const menu = document.querySelector('.open')       
const close= document.querySelector('.close')
const nav=document.querySelector('nav')
menu.addEventListener('click', () =>{
    nav.classList.add('open-nav')

})
close.addEventListener('click', () =>{
    nav.classList.remove('open-nav')

})

setInterval(change, 2000);

function change(){
    textAm.classList.add('fade');
    setTimeout(function(){
        textAm.classList.add('fades')
        setTimeout(function() {

            
            textAm.innerHTML = am[x];
            textAm.classList.remove('fade');
            textAm.classList.remove('fades')
            console.log(am[x]);
            x++;
            if(x>4)
            {
                x=0;
            }
        },450);
    },450);
}