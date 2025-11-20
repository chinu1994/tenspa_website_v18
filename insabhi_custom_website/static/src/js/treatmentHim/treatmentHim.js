/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class TreatmentHim extends Component {
}

TreatmentHim.template = "insabhi_custom_website.TreatmentHim";

whenReady(() => {
    const owl_treatmentHim = document.querySelector('.treatmentHim');
    if (owl_treatmentHim) {
        mount(TreatmentHim, owl_treatmentHim, { getTemplate });
    }
});
