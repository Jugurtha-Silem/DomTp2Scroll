
const navbar = document.querySelector("#navbar");

let lastScroll;

window.addEventListener("scroll", () => {

    if(window.scrollY < lastScroll){

        navbar.style.top = 0;

    }else{

        navbar.style.top = "-60px";
    }
    lastScroll = window.scrollY;
});

