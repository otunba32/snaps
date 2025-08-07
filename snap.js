// Desktop dropdown functions
function featuresList() {
    const dropdown = document.getElementById("myDropdown0");
    const icon = document.querySelector('.down-icon');

    dropdown.classList.toggle("show");

    if (dropdown.classList.contains('show')) {
        icon.src = 'images/icon-arrow-up.svg';
    } else {
        icon.src = 'images/icon-arrow-down.svg';
    }
}

function companyData() {
    const dropdown = document.getElementById("myDropdown1");
    const icon = document.querySelector('.down-icon2');

    dropdown.classList.toggle("show");

    if (dropdown.classList.contains('show')) {
        icon.src = 'images/icon-arrow-up.svg';
    } else {
        icon.src = 'images/icon-arrow-down.svg';
    }
}

// Mobile dropdown functions
function mobileFeaturesList() {
    const dropdown = document.getElementById("myDropdownMobile0");
    const icon = document.querySelector('.down-icon-mobile');

    dropdown.classList.toggle("show");

    if (dropdown.classList.contains('show')) {
        icon.src = 'images/icon-arrow-up.svg';
    } else {
        icon.src = 'images/icon-arrow-down.svg';
    }
}

function mobileCompanyData() {
    const dropdown = document.getElementById("myDropdownMobile1");
    const icon = document.querySelector('.down-icon2-mobile');

    dropdown.classList.toggle("show");

    if (dropdown.classList.contains('show')) {
        icon.src = 'images/icon-arrow-up.svg';
    } else {
        icon.src = 'images/icon-arrow-down.svg';
    }
}

// Mobile menu functionality
const menuShow = document.querySelector(".menu-show");
const menuClose = document.querySelector(".menu-close");
const sidebarOverlay = document.getElementById("sidebarOverlay");

menuShow.addEventListener("click", function (e) {
    e.preventDefault();
    sidebarOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

menuClose.addEventListener("click", function (e) {
    e.preventDefault();
    sidebarOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener("click", function (e) {
    if (e.target === sidebarOverlay) {
        sidebarOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close dropdowns when clicking outside
window.addEventListener('click', function (event) {
    // Desktop dropdowns
    if (!event.target.matches('.dropdown-link') && !event.target.closest('.dropdown')) {
        const dropdowns = document.querySelectorAll('.dropdown-menu, .dropdown-menu1');
        const icons = document.querySelectorAll('.down-icon, .down-icon2');

        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });

        icons.forEach(icon => {
            icon.src = 'images/icon-arrow-down.svg';
        });
    }
});

// Handle window resize
window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
        sidebarOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
