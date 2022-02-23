const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".dp-left-aside");
let flag = 0;

menuIcon.addEventListener("click", sidebarToggle);

function sidebarToggle() {
    if(!flag){
        flag = 1;
        sidebar.style.display = "block";
    } else {
        flag = 0;
        sidebar.style.display = "none";
    }
}