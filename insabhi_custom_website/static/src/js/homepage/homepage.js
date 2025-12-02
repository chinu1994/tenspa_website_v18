/** @odoo-module **/

import { Component, mount, whenReady } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class HomePage extends Component {}
HomePage.template = "insabhi_custom_website.HomePage";

whenReady(() => {
    const homepage = document.querySelector('.homepage');
    if (homepage) {
        mount(HomePage, homepage, { getTemplate });
    }

    //  indicator(dash dash) fucn start

    const initProductCarousel = () => {
        const track = document.querySelector('.insabhi-carousel-track');
        const items = document.querySelectorAll('.insabhi-carousel-item');
        const prevBtns = document.querySelectorAll('.insabhi-carousel-prev');
        const nextBtns = document.querySelectorAll('.insabhi-carousel-next');
        // Select indicators separately for desktop and mobile
        const desktopIndicators = document.querySelectorAll('.d-none.d-md-flex .insabhi-indicator');
        const mobileIndicators = document.querySelectorAll('.d-flex.d-sm-none .insabhi-indicator');

        if (!track || !items.length || prevBtns.length === 0 || nextBtns.length === 0) return;

        let perPage = getPerPage();
        let currentIndex = 0;

        function getPerPage() {
            return window.innerWidth >= 992 ? 3 : 2;
        }

        // Update indicators based on current screen size
        function updateIndicators() {
            // Determine which set of indicators to use based on screen size
            const activeIndicators = window.innerWidth >= 768 ? desktopIndicators : mobileIndicators;

            // Update active indicators
            activeIndicators.forEach((indicator, index) => {
                if (index === Math.floor(currentIndex / perPage)) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        const moveTo = (idx) => {
            const maxIdx = Math.max(0, items.length - perPage);
            idx = Math.max(0, Math.min(idx, maxIdx));
            currentIndex = idx;
            const percent = -(100 / perPage) * Math.floor(currentIndex / perPage);
            track.style.transform = `translateX(${percent}%)`;
            updateIndicators();
        };

        // Bind ALL arrows
        prevBtns.forEach(btn => btn.onclick = () => moveTo(currentIndex - perPage));
        nextBtns.forEach(btn => btn.onclick = () => moveTo(currentIndex + perPage));

        // Indicator click functionality for both sets
        desktopIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                const targetIndex = index * perPage;
                moveTo(targetIndex);
            });
        });

        mobileIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                const targetIndex = index * perPage;
                moveTo(targetIndex);
            });
        });

        // Responsive
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newPerPage = getPerPage();
                if (newPerPage !== perPage) {
                    perPage = newPerPage;
                    moveTo(currentIndex);
                } else {
                    // Even if perPage hasn't changed, we might need to update indicators
                    updateIndicators();
                }
            }, 100);
        });

        moveTo(0);
        updateIndicators();
    };

    initProductCarousel();
    setTimeout(initProductCarousel, 200);
});

//wishlist color change if click
/**
 * Toggles the wishlist icon appearance (outline vs filled)
 * @param {HTMLElement} btn - The button element that was clicked (insabhi-wishlist-btn)
 */
function toggleWishlist(btn) {
    const icon = btn.querySelector('i');

    // Check if the current icon is the outline/dash version
    if (icon.classList.contains('bi-bookmark')) {
        // Change to filled black icon
        icon.classList.remove('bi-bookmark');
        icon.classList.add('bi-bookmark-fill');

        // Optional: Change button color to emphasize selection (if needed)
        // btn.classList.add('text-black');

    } else if (icon.classList.contains('bi-bookmark-fill')) {
        // Change back to outline/dash icon
        icon.classList.remove('bi-bookmark-fill');
        icon.classList.add('bi-bookmark');

    }


}

window.toggleWishlist = toggleWishlist;