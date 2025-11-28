/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class Faq extends Component {
}

Faq.template = "insabhi_custom_website.Faq";

whenReady(() => {
    const owl_faq = document.querySelector('.faq');
    if (owl_faq) {
        mount(Faq, owl_faq, { getTemplate });
    }
});
