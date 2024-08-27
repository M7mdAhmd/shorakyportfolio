// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.navbar ul');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    // Scroll to Top Element
    const scrollTopBtn = document.getElementById('scroll-top');

    // Section Elements for reveal effect
    const sections = document.querySelectorAll('.section');

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close Mobile Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Scroll to Top Button Visibility
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }

        // Section Reveal on Scroll
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 1.2;
            if (sectionTop < triggerPoint) {
                section.classList.add('active');
            }
        });
    });

    // Smooth Scrolling for Internal Links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    scrollTopBtn.addEventListener('click', smoothScroll);

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') === '#' ? 'home' : this.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop - 70;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Initialize Section Reveal on Load
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2;
        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        }
    });
});
