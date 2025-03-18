// This file is intentionally left blank.// Scroll functionality for projects
const scrollContainer = document.querySelector('.projects-scroll');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -320,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
});

// Email button functionality
const emailBtn = document.querySelector('.email-btn');
emailBtn.addEventListener('mouseenter', () => {
    emailBtn.textContent = emailBtn.dataset.email;
});

emailBtn.addEventListener('mouseleave', () => {
    emailBtn.textContent = 'Via Email';
});

const phoneBtn = document.querySelector('.phone-btn');
phoneBtn.addEventListener('mouseenter', () => {
    phoneBtn.textContent = phoneBtn.dataset.phone;
});

phoneBtn.addEventListener('mouseleave', () => {
    phoneBtn.textContent = 'Via Phone';
});


const cliqBtn = document.querySelector('.cliq-btn');
cliqBtn.addEventListener('mouseenter', () => {
    cliqBtn.textContent = cliqBtn.dataset.cliq;
});

cliqBtn.addEventListener('mouseleave', () => {
    cliqBtn.textContent = 'Via Cliq';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});