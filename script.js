const portfolioData = [
    {
        id: 1,
        title: "Digital Illustration Series",
        description: "A collection of digital illustrations exploring themes of nature and technology.",
        image: "assets/portfolio/illustration.jpg"
    },
    {
        id: 2,
        title: "Character Animation Reel",
        description: "Showcasing character animations with expressive movements.",
        image: "assets/portfolio/animation.jpg"
    },
    {
        id: 3,
        title: "Editorial Photography",
        description: "Quiet, natural-light photography focused on mood and stillness.",
        image: "assets/portfolio/photography.jpg"
    },
    {
        id: 4,
        title: "Fashion Design Sketches",
        description: "Concept sketches and fabric studies for an evening-wear capsule collection.",
        image: "assets/portfolio/fashion.jpg"
    }
];

const blogData = [
    {
        id: 1,
        title: "My Creative Process",
        date: "February 14, 2024",
        excerpt: "Insights into my artistic workflow and inspirations.",
        url: "blog/my-creative-process.html"
    },
    {
        id: 2,
        title: "Exploring New Mediums",
        date: "March 1, 2024",
        excerpt: "Experimenting with mixed media and new techniques.",
        url: "blog/exploring-new-mediums.html"
    }
];

function renderPortfolioList() {
    const list = document.getElementById('portfolioList');
    if (!list) return;
    list.innerHTML = '';
    portfolioData.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.animationDelay = (index * 0.15) + 's';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.loading = 'lazy';

        const info = document.createElement('div');
        const title = document.createElement('h4');
        title.textContent = item.title;

        const desc = document.createElement('p');
        desc.textContent = item.description;

        info.appendChild(title);
        info.appendChild(desc);

        li.appendChild(img);
        li.appendChild(info);

        list.appendChild(li);
    });
}

function renderBlogPosts() {
    const blogList = document.getElementById('blogList');
    if (!blogList) return;
    blogList.innerHTML = '';
    blogData.forEach(post => {
        const div = document.createElement('div');
        div.className = 'blog-post';

        const title = document.createElement('h3');
        const link = document.createElement('a');
        link.href = post.url;
        link.textContent = post.title;
        title.appendChild(link);

        const date = document.createElement('small');
        date.textContent = post.date;

        const excerpt = document.createElement('p');
        excerpt.textContent = post.excerpt;

        const readMore = document.createElement('a');
        readMore.href = post.url;
        readMore.className = 'read-more';
        readMore.textContent = 'Read more →';

        div.appendChild(title);
        div.appendChild(date);
        div.appendChild(excerpt);
        div.appendChild(readMore);

        blogList.appendChild(div);
    });
}

function setYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function setupNavToggle() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form || !status) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.textContent = 'Sending...';
        status.className = 'form-status';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                status.textContent = "Thanks for reaching out — I'll get back to you soon.";
                status.className = 'form-status success';
                form.reset();
            } else {
                status.textContent = 'Something went wrong. Please email me directly instead.';
                status.className = 'form-status error';
            }
        } catch (err) {
            status.textContent = 'Something went wrong. Please email me directly instead.';
            status.className = 'form-status error';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolioList();
    renderBlogPosts();
    setYear();
    setupNavToggle();
    setupContactForm();
});
