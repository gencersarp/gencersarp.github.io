document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling ---
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position considering fixed navbar height (adjust if needed)
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll Animations (Fade In) using Intersection Observer ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Optional: Active Nav Link Highlighting on Scroll ---
    // (More complex, involves tracking section visibility)
    const sections = document.querySelectorAll('main section[id]');
    const navLi = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50; // Adjust offset as needed
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
        // Handle edge case for top of page
         if (pageYOffset < sections[0].offsetTop - navbarHeight - 50) {
             navLi.forEach(a => a.classList.remove('active'));
             const homeLink = document.querySelector('.nav-links a[href="#home"]');
             if (homeLink) homeLink.classList.add('active');
        }
    });

});