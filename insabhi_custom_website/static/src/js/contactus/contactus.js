/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class ContactUs extends Component {
}

ContactUs.template ="insabhi_custom_website.ContactUs";

whenReady(() => {
    const owl_contact_us = document.querySelector('.contactus');
    if (owl_contact_us) {
        mount(ContactUs, owl_contact_us, { getTemplate });
    }
});
