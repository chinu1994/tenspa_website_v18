/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class Faq extends Component {

    setup() {
        this.state = useState({
            activeTab: "general",
        });

        whenReady(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {

                    const links = document.querySelectorAll('#ten-faq-page .list-group a');
                    const target = document.querySelector('#ten-faq-page .col-lg-8 .bg-white.rounded-5');

                    if (!target || links.length === 0) return;

                    links.forEach(link => {
                        link.addEventListener('click', () => {
                            if (window.innerWidth < 992) {

                                requestAnimationFrame(() => {
                                    target.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                        inline: 'nearest'
                                    });

                                    setTimeout(() => {
                                        const headerOffset = 100;
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

    // ⭐ AUTO SCROLL ADDED HERE ONLY — NOTHING ELSE CHANGED
    switchTab(tabName) {
        this.state.activeTab = tabName;

        setTimeout(() => {
            const el = document.getElementById("faq_content");
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    }
}

Faq.template = "insabhi_custom_website.Faq";

whenReady(() => {
    const owl_faq = document.querySelector('.faq');
    if (owl_faq) {
        mount(Faq, owl_faq, { getTemplate });
    }
});
