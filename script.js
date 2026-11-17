
// ============================================
// MOBILE MENU TOGGLE
// ============================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener('click', () => {

        const isOpen = navMenu.classList.toggle('active');

        mobileMenuBtn.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));

    });

    // Close mobile menu after selecting a navigation link
    navMenu.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            navMenu.classList.remove('active');

            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            mobileMenuBtn.setAttribute('aria-expanded', 'false');

        });

    });

    // Close mobile menu when clicking outside navigation
    document.addEventListener('click', (event) => {

        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedMenuButton = mobileMenuBtn.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navMenu.classList.remove('active');

            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            mobileMenuBtn.setAttribute('aria-expanded', 'false');

        }

    });

    // Close mobile menu when pressing Escape
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {

            navMenu.classList.remove('active');

            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            mobileMenuBtn.setAttribute('aria-expanded', 'false');

        }

    });

}


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
