
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector("#navmenu");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            toggleBtn.classList.toggle("bi-list");
            toggleBtn.classList.toggle("bi-x");
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const body = document.body;

    if (!darkModeToggle || !darkModeIcon) return;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeIcon.className = 'bi bi-sun';
    }

    
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

       
        if (body.classList.contains('dark-mode')) {
            darkModeIcon.className = 'bi bi-sun';
            localStorage.setItem('darkMode', 'true');
        } else {
            darkModeIcon.className = 'bi bi-moon';
            localStorage.setItem('darkMode', 'false');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const testimonials = [
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200",
            name: "Martin",
            handle: "@martin_dev",
            text: "Zaptodoor made ordering and delivery an absolute breeze."
        },
        {
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
            name: "Avery Johnson",
            handle: "@averywrites",
            text: "Fast delivery, great support and smooth app experience."
        },
        {
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
            name: "Jordan Lee",
            handle: "@jordantalks",
            text: "Very clean UI and reliable local delivery platform."
        }
    ];

    function createCard(t) {
        return `
      <div class="tweet-card">
        <div class="tweet-header">
          <img src="${t.img}" alt="${t.name}">
          <div>
            <h4>${t.name} <span class="verify">✔</span></h4>
            <p>${t.handle}</p>
          </div>
        </div>
        <p class="tweet-text">${t.text}</p>
      </div>
    `;
    }

    function renderRow(rowId) {
        const row = document.getElementById(rowId);
        if (!row) return;

        const doubled = [...testimonials, ...testimonials];
        doubled.forEach(t => {
            row.insertAdjacentHTML("beforeend", createCard(t));
        });
    }

    
    renderRow("row1");
    renderRow("row2");
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollTop = document.getElementById('scroll-top');

    if (scrollTop) {
        
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        });

        
        scrollTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.querySelector('.copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

           
            if (href === '#' || this.id === 'scroll-top') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navmenu ul li a:not(.download-btn)');
    const navMenu = document.querySelector("#navmenu");
    const toggleBtn = document.querySelector(".mobile-nav-toggle");

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 991 && navMenu && toggleBtn) {
                navMenu.classList.remove("active");
                toggleBtn.classList.remove("bi-x");
                toggleBtn.classList.add("bi-list");
            }
        });
    });
});