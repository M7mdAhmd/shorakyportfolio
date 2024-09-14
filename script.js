document.addEventListener('DOMContentLoaded', () => {
    // Navbar Elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.navbar ul');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    // Scroll to Top Element
    const scrollTopBtn = document.getElementById('scroll-top');

    // Section Elements
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

        // Update Active Link Based on Scroll Position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 70 && window.pageYOffset < sectionTop + sectionHeight - 70) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
                const underline = document.querySelector('.navbar ul li a.active::after');
                if (underline) {
                    underline.style.width = `${link.offsetWidth}px`;
                    underline.style.left = `${link.offsetLeft}px`;
                }
            }
        });

        // Ensure Home link is active if at the top of the page
        if (window.pageYOffset === 0) {
            document.querySelector('a[href="#home"]').classList.add('active');
        }
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
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 70 && window.pageYOffset < sectionTop + sectionHeight - 70) {
            section.classList.add('active');
        }
    });
});
