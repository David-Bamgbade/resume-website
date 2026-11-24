// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (!mobileMenuBtn || !navMenu) return;

    const openMenu = () => {
        navMenu.classList.add('active');
        mobileMenuBtn.classList.add('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    };

    const closeMenu = () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    };

    mobileMenuBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (
            !navMenu.contains(event.target) &&
            !mobileMenuBtn.contains(event.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});


// ============================================
// HEADER SCROLL EFFECT
// ============================================

const header = document.querySelector('header');

if (header) {

    const updateHeader = () => {

        if (window.scrollY > 50) {

            header.style.padding = '15px 0';

            header.style.boxShadow =
                '0 5px 20px rgba(0, 0, 0, 0.1)';

        } else {

            header.style.padding = '20px 0';

            header.style.boxShadow = 'none';

        }

    };

    window.addEventListener('scroll', updateHeader, {
        passive: true
    });

    updateHeader();

}


// ============================================
// CONTACT FORM
// ============================================

// Formspree handles the actual submission.
// Do not prevent the default form submission here.
// This ensures messages are sent to your configured endpoint.


// ============================================
// PHONE NUMBER
// ============================================

// The phone number already uses a tel: link in HTML.
// No additional JavaScript is required.
