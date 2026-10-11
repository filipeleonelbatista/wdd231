const navButton = document.getElementById('nav-button');
const navMenu = document.getElementById('nav-menu');

navButton.addEventListener('click', () => {
    const isExpanded = navButton.getAttribute('aria-expanded') === 'true';
    navButton.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('show', !isExpanded);
});