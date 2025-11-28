/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class Faq extends Component {

    setup() {
        this.state = useState({
            activeTab: "general",
        });
    }

    switchTab(tabName) {
        this.state.activeTab = tabName;
    }
}

Faq.template = "insabhi_custom_website.Faq";

whenReady(() => {
    const owl_faq = document.querySelector('.faq');
    if (owl_faq) {
        mount(Faq, owl_faq, { getTemplate });
    }
});
