/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class Faq extends Component {

    setup() {
        this.state = useState({
            activeTab: "general",
        });

        // ONE-TIME setup – runs only once when component is created
        whenReady(() => {
            // Wait until everything (OWL + images + layout) is really ready
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {

                    const links = document.querySelectorAll('#ten-faq-page .list-group a');
                    const target = document.querySelector('#ten-faq-page .col-lg-8 .bg-white.rounded-5');

                    if (!target || links.length === 0) return;

                    links.forEach(link => {
                        link.addEventListener('click', () => {
                            // Only on mobile/tablet
                            if (window.innerWidth < 992) {
                                // Use the most reliable scroll method + perfect timing
                                requestAnimationFrame(() => {
                                    target.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                        inline: 'nearest'
                                    });

                                    // Extra insurance for very slow devices
                                    // Forces the browser to respect the offset of your fixed header
                                    setTimeout(() => {
                                        const headerOffset = 100; // change only if your header is taller
                                        const y = window.pageYOffset + target.getBoundingClientRect().top - headerOffset;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }, 600);
                                });
                            }
                        });
                    });

                });
            });
        });
    }

    switchTab(tabName) {
        this.state.activeTab = tabName;
        // ← we don’t touch anything here anymore
    }
}

Faq.template = "insabhi_custom_website.Faq";

whenReady(() => {
    const owl_faq = document.querySelector('.faq');
    if (owl_faq) {
        mount(Faq, owl_faq, { getTemplate });
    }
});