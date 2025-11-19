/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class TenStore extends Component {
}

TenStore.template = "insabhi_custom_website.TenStore";

whenReady(() => {
    const owl_tenStore = document.querySelector('.tenStore');
    if (owl_tenStore) {
        mount(TenStore, owl_tenStore, { getTemplate });
    }
});