var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
 for(tablink of tablinks){
     tablink.classList.remove("active-link");
 }
 for(tabcontent of tabcontents){
     tabcontent.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}
// POPUP

function openpopup(event) {
    event.preventDefault();
    document.getElementById("popup").classList.add("open-popup");
}

function closepopup() {
    document.getElementById("popup").classList.remove("open-popup");
}
// BURGER
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}
// SWIPER
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        loop: true, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});


