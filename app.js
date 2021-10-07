const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.value');
const header = document.querySelector('.header');
btns.forEach(btn =>{
  btn.addEventListener( 'click' , btnClicked)
});

let count = 0

function btnClicked(e){

 
 let styles = e.currentTarget.classList
 if( styles.contains('increase')){

    count++
    value.style.color = "rgb(40, 179, 81)";
    header.style.color = "rgb(40, 179, 81)";
    
 }else if(styles.contains('decrease') && value.textContent > 0){
   count--
   
   value.style.color = "red" ;
   header.style.color = "red" ;
   
 }else{
   count =0
   value.style.color = "rgb(23, 28, 75)" ;
  header.style.color = "rgb(23, 28, 75)" ;

 }
  
 
 value.textContent = count

 
}