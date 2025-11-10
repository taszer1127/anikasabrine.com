const portfolioData = [
    {
        id: 1,
        title: "Digital Illustration Series",
        description: "A collection of digital illustrations exploring themes of nature and technology.",
        image: "assets/portfolio/illustration1.jpg"
    },
    {
        id: 2,
        title: "Character Animation Reel",
        description: "Showcasing character animations with expressive movements.",
        image: "assets/portfolio/animation1.jpg"
    },
    // Add more items here
];

const blogData = [
    {
        id: 1,
        title: "My Creative Process",
        date: "February 14, 2024",
        excerpt: "Insights into my artistic workflow and inspirations."
    },
    {
        id: 2,
        title: "Exploring New Mediums",
        date: "March 1, 2024",
        excerpt: "Experimenting with mixed media and new techniques."
    },
    // Add more posts here
];

function renderPortfolioList() {
    const list = document.getElementById('portfolioList');
    list.innerHTML = '';
    portfolioData.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.animationDelay = (index * 0.15) + 's';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

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
    blogList.innerHTML = '';
    blogData.forEach(post => {
        const div = document.createElement('div');
        div.className = 'blog-post';

        const title = document.createElement('h3');
        title.textContent = post.title;

        const date = document.createElement('small');
        date.textContent = post.date;

        const excerpt = document.createElement('p');
        excerpt.textContent = post.excerpt;

        div.appendChild(title);
        div.appendChild(date);
        div.appendChild(excerpt);

        blogList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolioList();
    renderBlogPosts();
});