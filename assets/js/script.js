const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Auto-close menu when a link is clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
          item.classList.add('active');
        }
      });
    });