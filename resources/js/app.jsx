import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Mount React components
document.addEventListener('DOMContentLoaded', () => {
    // Hero
    const heroElement = document.getElementById('hero-root');
    if (heroElement) {
        createRoot(heroElement).render(<Hero />);
    }

    // Trust Badges
    const trustElement = document.getElementById('trust-root');
    if (trustElement) {
        createRoot(trustElement).render(<TrustBadges />);
    }

    // Services
    const servicesElement = document.getElementById('services-root');
    if (servicesElement) {
        createRoot(servicesElement).render(<Services />);
    }

    // Blog
    const blogElement = document.getElementById('blog-root');
    if (blogElement) {
        createRoot(blogElement).render(<Blog />);
    }

    // CTA
    const ctaElement = document.getElementById('cta-root');
    if (ctaElement) {
        createRoot(ctaElement).render(<CTA />);
    }

    // Footer
    const footerElement = document.getElementById('footer-root');
    if (footerElement) {
        createRoot(footerElement).render(<Footer />);
    }
});
