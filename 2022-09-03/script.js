function menuToggle(){
    let navMenu = document.getElementById('menu-overlay');
    navMenu.classList.toggle('active');

    let navIcon = document.getElementById('toggleIcon');
    navIcon.classList.toggle('active');
}