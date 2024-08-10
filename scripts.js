document.addEventListener("DOMContentLoaded", function() {
    // Example: Functionality for a responsive menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
