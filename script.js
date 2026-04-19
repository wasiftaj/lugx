    const sections = document.querySelectorAll('.trend, .top, .categorey, .lastbg');
    const navItems = document.querySelectorAll('.header ul li');

    const sectionMap = [
        { section: document.querySelector('.trend'), index: 1 },
        { section: document.querySelector('.top'), index: 1 },
        { section: document.querySelector('.categorey'), index: 1 },
        { section: document.querySelector('.lastbg'), index: 1 },
    ];

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight / 2) {
                current = section.className;
            }
        });

        navItems.forEach(item => {
            item.removeAttribute('id');
        });

        if (current === 'trend' || current === 'top') {
            navItems[1].id = 'active';
        } else if (current === 'categorey') {
            navItems[2].id = 'active';
        } else if (current === 'lastbg') {
            navItems[3].id = 'active';
        } else {
            navItems[0].id = 'active';
        }
    });
