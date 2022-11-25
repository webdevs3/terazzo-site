const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
});


// products duh 
let headClass = document.getElementsByClassName("prod-img1");

//faq







//about us page

let but1 = document.querySelector(".but1");
let but2 = document.querySelector(".but2");
let but3 = document.querySelector(".but3");


let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");


but1.addEventListener("click",()=> {
  img2.style.display="none";
  img3.style.display="none";
  img1.style.display="block";
})
but2.addEventListener("click",()=> {
  img1.style.display="none";
  img3.style.display="none";
  img2.style.display="block";
})

but3.addEventListener("click",()=> {
  img1.style.display="none";
  img2.style.display="none";
  img3.style.display="block";
})

