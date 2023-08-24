const iconMenu = document.querySelector(".menu-mobile");
const sidebar = document.querySelector(".sideBar-container");

iconMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    if (sidebar.style.display === "none") {
        sidebar.classList.remove('closeSidebar');
        sidebar.classList.add('openSidebar');
        sidebar.style.display = "block";
    } else {
        sidebar.classList.remove('openSidebar');
        sidebar.classList.add('closeSidebar');

        setTimeout(() => {
            sidebar.style.display = "none";
        }, 300);
    }



})

document.body.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target)) {
        sidebar.classList.remove('openSidebar');
        sidebar.classList.add('closeSidebar');

        setTimeout(() => {
            sidebar.style.display = "none";
        }, 300);
    }
});


const buttonBottom = document.getElementById('scrollButton')


buttonBottom.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
});