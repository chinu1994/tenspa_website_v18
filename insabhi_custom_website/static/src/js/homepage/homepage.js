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

    const initProductCarousel = () => {
        const track = document.querySelector('.insabhi-carousel-track');
        const items = document.querySelectorAll('.insabhi-carousel-item');
        const prevBtns = document.querySelectorAll('.insabhi-carousel-prev');
        const nextBtns = document.querySelectorAll('.insabhi-carousel-next');

        if (!track || !items.length || prevBtns.length === 0 || nextBtns.length === 0) return;

        let perPage = getPerPage();
        let currentIndex = 0;

        function getPerPage() {
            return window.innerWidth >= 992 ? 3 : 2;
        }

        const moveTo = (idx) => {
            const maxIdx = Math.max(0, items.length - perPage);
            idx = Math.max(0, Math.min(idx, maxIdx));
            currentIndex = idx;
            const percent = -(100 / perPage) * currentIndex;
            track.style.transform = `translateX(${percent}%)`;
        };

        // Bind ALL arrows
        prevBtns.forEach(btn => btn.onclick = () => moveTo(currentIndex - perPage));
        nextBtns.forEach(btn => btn.onclick = () => moveTo(currentIndex + perPage));

        // Responsive
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newPerPage = getPerPage();
                if (newPerPage !== perPage) {
                    perPage = newPerPage;
                    moveTo(currentIndex);
                }
            }, 100);
        });

        moveTo(0);
    };

    initProductCarousel();
    setTimeout(initProductCarousel, 200);
});