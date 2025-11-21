/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class TreatmentHer extends Component {
}

TreatmentHer.template = "insabhi_custom_website.TreatmentHer";

whenReady(() => {
    const owl_treatmentHer = document.querySelector('.treatmentHer');
    if (owl_treatmentHer) {
        mount(TreatmentHer, owl_treatmentHer, { getTemplate });
    }
});