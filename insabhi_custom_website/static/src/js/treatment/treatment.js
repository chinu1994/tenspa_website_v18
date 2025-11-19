/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class TreatMent extends Component {
}

TreatMent.template = "owl_custom_website.TreatMent";

whenReady(() => {
    const owl_treatment = document.querySelector('.treatment');
    if (owl_treatment) {
        mount(TreatMent, owl_treatment, { getTemplate });
    }
});
