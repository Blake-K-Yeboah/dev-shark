// HOME PAGE
if (window.location.pathname == "/" || window.location.pathname == "/index.html") {

    // INITIALIZE AOS
    AOS.init();

    const downArrow = document.querySelector('#downArrow');

    downArrow.addEventListener('click', () => {
        let rect = document.querySelector('#pandemic').getBoundingClientRect();
        window.scrollTo(0, rect.top - 100);
    });

    window.addEventListener('load', () => {
        let scrollIndex = 1;

        const prevArrow = document.querySelector('#prev-arrow');
        const nextArrow = document.querySelector('#next-arrow');

        prevArrow.addEventListener('click', () => {

            document.querySelector(`#img-${scrollIndex}`).classList.add('hidden');

            if (scrollIndex === 1) {
                scrollIndex = 4
            } else {
                scrollIndex -= 1;
            }

            document.querySelector(`#img-${scrollIndex}`).classList.remove('hidden');

        });

        nextArrow.addEventListener('click', () => {

            document.querySelector(`#img-${scrollIndex}`).classList.add('hidden');

            if (scrollIndex === 4) {
                scrollIndex = 1
            } else {
                scrollIndex += 1;
            }

            document.querySelector(`#img-${scrollIndex}`).classList.remove('hidden');
            
        });

        const portfolioBtn = document.querySelector('#portfolioBtn');
    
        portfolioBtn.addEventListener('click', () => {
            window.location = "/portfolio"
        });
    });
}

// ALL PAGES
window.addEventListener('load', () => {

    // Navbar Scroll Animation
    const checkScrollDistance = () => {
        let scrollTop = window.pageYOffset;

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    const navbar = document.querySelector('#navbar');

    checkScrollDistance();

    window.addEventListener('scroll', checkScrollDistance);

    // Mobile Navigation Sidebar

    const openMenuIcon = document.querySelector('#nav-menu-icon');
    const closeMenuIcon = document.querySelector('#mobile-menu-icon');
    const mobileSidebar = document.querySelector('#mobile-sidebar');

    openMenuIcon.addEventListener('click', () => {
        mobileSidebar.classList.remove('hidden');
    });
    
    closeMenuIcon.addEventListener('click', () => {
        mobileSidebar.classList.add('hidden');
    });

});