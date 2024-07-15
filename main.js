const menuBtn =document.getElementById("main-btn");
const navLink =document.getElementById("nav-link");
const menuBtnIcon =menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) =>{
    navLink.classList.toggle("open");
    const isOpen = navLink.classList.contains("open");
    menuBtnIcon.setAttribute("classs",isOpen?"ri-close-line":"ri-menu-line");

}) 
const scrollRevealOption={
    distance: "50px",
    origin:"bottom",
    duration:100,
};
scrollRevelOption().reveal(".header_image img", {
    ...scrollRevealOption,
    origin:"right"
});
scrollRevelOption().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay:"500"
});
scrollRevelOption().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:"1000"
});
scrollReveal().reveal("order_card",{
    ...scrollRevealOption,
    interval:500,
});
scrollReveal().reveal(".event_content",{
    duration:1000,
});
