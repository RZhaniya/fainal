/*
=============
Navigation
=============
 */
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

navOpen.addEventListener("click", () => {
 
    //menu.classList.add("show");
    menu.style="left:0;";
    document.body.classList.add("show");
  
});

navClose.addEventListener("click", () => {
    menu.style="left:-100%;";
    document.body.classList.remove("show");
  
});
/*
=============
Fixed Navigation
=============
 */
// Fixed Nav
const navItem = document.querySelector(".nav-item");
const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
    navItem.classList.add(".fix");
  } else {
    navBar.classList.remove("fix-nav");
    navItem.classList.remove(".fix");
  }
});
const btnClose = document.querySelector(".btnClose");
const iphone = document.querySelector(".iphone");
const watch = document.querySelector(".watch");
const airpods = document.querySelector(".airpods");
const showMore = document.querySelector(".btnShowMore");
showMore.addEventListener("click", ()=>{
    iphone.style="display:block;";
    watch.style="display:block;";
    airpods.style="display:block;";
    btnClose.style="display:block;";
    showMore.style="display:none;";
});
btnClose.addEventListener("click", ()=>{
    iphone.style="display:none;";
    watch.style="display:none;";
    airpods.style="display:none;";
    btnClose.style="display:none;";
    showMore.style="display:block;";
});