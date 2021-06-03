const menuBtn = document.querySelector('#menuBtn');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-open");
    
    if(menuBtn.classList.value.includes("menu-open")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "initial";
    }
})