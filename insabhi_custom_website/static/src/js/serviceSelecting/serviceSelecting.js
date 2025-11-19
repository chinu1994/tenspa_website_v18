/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class ServiceSelecting extends Component {
}

ServiceSelecting.template = "insabhi_custom_website.ServiceSelecting";

whenReady(() => {
    const owl_serviceSelecting = document.querySelector('.serviceSelecting');
    if (owl_serviceSelecting) {
        mount(ServiceSelecting, owl_serviceSelecting, { getTemplate });
    }
});