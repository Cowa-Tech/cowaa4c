// Preloader
window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
});

// Profile dropdown
document.getElementById('profileBtn').addEventListener('click', function () {
    this.parentElement.classList.toggle('dropdown-active');
});

window.addEventListener('click', function (event) {
    if (!event.target.closest('.profile-dropdown')) {
        document.querySelector('.dropdown-active')?.classList.remove('dropdown-active');
    }
});

// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const burgerMenu = document.getElementById('burgerMenu');
const closeSidebar = document.getElementById('closeSidebar');
const mainContent = document.querySelector('.main-content');
const topbar = document.querySelector('.topbar');

burgerMenu.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('collapsed');
});

closeSidebar.addEventListener('click', function () {
    sidebar.classList.remove('open');
    sidebar.classList.add('collapsed');
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open', 'collapsed');
    } else {
        sidebar.classList.add('collapsed');
    }
});