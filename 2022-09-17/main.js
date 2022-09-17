let scroll = document.querySelector(".arrow");
function changeClass(){
scroll.classList.toggle("active", window.scrollY > 250)
}

window.addEventListener("scroll", changeClass);

function scrollTotop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scroll.addEventListener("click",scrollTotop);