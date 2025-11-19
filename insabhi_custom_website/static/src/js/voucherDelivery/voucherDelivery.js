/** @odoo-module **/

import {Component, mount, whenReady, useState, onWillStart} from "@odoo/owl";
import {getTemplate} from "@web/core/templates";
import {rpc} from "@web/core/network/rpc";
import {AboutUs} from "../aboutus/aboutus";

export class VoucherDelivery extends Component {
}

VoucherDelivery.template = "insabhi_custom_website.VoucherDelivery";

whenReady(() => {
    const owl_voucherDelivery = document.querySelector('.voucherDelivery');
    if (owl_voucherDelivery) {
        mount(VoucherDelivery, owl_voucherDelivery, {getTemplate});
    }
});


