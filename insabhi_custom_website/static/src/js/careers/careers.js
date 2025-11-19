/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class Careers extends Component {
}

Careers.template = "insabhi_custom_website.Careers";

whenReady(() => {
    const owl_careers = document.querySelector('.careers');
    if (owl_careers) {
        mount(Careers, owl_careers, { getTemplate });
    }
});
