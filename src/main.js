import './index.css'
import 'flowbite'
import { BeadsNavbar } from './components/BeadsNavbar';
import React from 'react';
import { createRoot } from 'react-dom/client';
import HeroCarousel from './components/HeroCarousel';
import ReactDOM from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
    // React component rendering for navbar
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        const root = createRoot(navContainer);
        root.render(React.createElement(BeadsNavbar));
    }

    // React component rendering for hero carousel
    const heroContainer = document.getElementById('hero-container');
    if (heroContainer) {
        const heroRoot = createRoot(heroContainer);
        heroRoot.render(React.createElement(HeroCarousel));
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Product card animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-lift');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-lift');
        });
    });

    // Newsletter form validation
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const formSuccess = document.getElementById('form-success');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation
            if (!emailInput.value || !validateEmail(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.classList.remove('hidden');
                return;
            }

            // Hide error if previously shown
            emailError.classList.add('hidden');

            try {
                // Show loading state
                const submitButton = newsletterForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Subscribing...';
                submitButton.disabled = true;

                // This would be replaced with actual API call
                setTimeout(() => {
                    // Simulate successful submission
                    formSuccess.classList.remove('hidden');
                    newsletterForm.reset();

                    // Reset button
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.classList.add('hidden');
                    }, 5000);
                }, 1500);
            } catch (error) {
                console.error('Error subscribing:', error);
                emailError.textContent = 'An error occurred. Please try again.';
                emailError.classList.remove('hidden');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
