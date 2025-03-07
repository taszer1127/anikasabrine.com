function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');
    closeNav();
}

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

function closeNav() {
    const nav = document.querySelector('nav');
    nav.classList.remove('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showContent('about');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
