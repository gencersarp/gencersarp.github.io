/**
 * Portfolio Website Script
 *
 * Includes functionalities for:
 * - Smooth scrolling for navigation links
 * - Navbar background transition on scroll
 * - Fade-in animations for elements on scroll using Intersection Observer
 * - Updating the footer copyright year
 * - Highlighting the active navigation link based on scroll position
 */

 // JavaScript
const blob = document.getElementById("blob");

document.addEventListener("mousemove", (e) => {
  blob.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

 document.addEventListener('DOMContentLoaded', function() {

    /**
     * Smooth Scrolling for Anchor Links
     */
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get navbar height once

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor jump
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position considering fixed navbar height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                // Perform smooth scroll
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * Navbar Background Transition on Scroll
     */
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50; // Pixels to scroll before changing navbar style

    function checkNavbarScroll() {
        if (window.pageYOffset > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    // Initial check in case page is loaded scrolled down
    checkNavbarScroll();
    // Listen for scroll events to update navbar style
    window.addEventListener('scroll', checkNavbarScroll, { passive: true }); // Use passive listener for performance


    /**
     * Scroll Animations (Fade In) using Intersection Observer
     */
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Configuration for the observer
    const observerOptions = {
        root: null, // Observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible (adjust as needed)
    };

    // Callback function when an element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class to trigger CSS animation
                observer.unobserve(entry.target); // Stop observing the element once it's visible
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each target element
    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    /**
     * Update Footer Copyright Year Dynamically
     */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear(); // Set current year
    }

    /**
     * Active Navigation Link Highlighting on Scroll
     */
    const sections = document.querySelectorAll('main section[id]'); // Get all sections with IDs
    const navLiAnchors = document.querySelectorAll('.nav-links li a'); // Get nav links

    function highlightActiveLink() {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset;

        // Find which section is currently most visible
        sections.forEach(section => {
            // Adjust offset calculation to trigger highlight slightly before section top
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Handle edge case for top of page (highlight Home)
        if (scrollPosition < sections[0].offsetTop - navbarHeight - 50) {
            currentSectionId = 'home';
        }
        // Handle edge case for bottom of page (highlight Contact)
        else if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50) { // Check if near bottom
             currentSectionId = 'contact'; // Or the ID of your last section
        }


        // Update active class on navigation links
        navLiAnchors.forEach(a => {
            a.classList.remove('active'); // Remove active class from all
            // Add active class to the link corresponding to the current section
            if (a.getAttribute('href') === `#${currentSectionId}`) {
                a.classList.add('active');
            }
        });
    }

    // Initial check on load
    highlightActiveLink();
    // Listen for scroll events to update active link
    window.addEventListener('scroll', highlightActiveLink, { passive: true });

}); // End DOMContentLoaded
