/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class GiftVoucher extends Component {
}

GiftVoucher.template = "insabhi_custom_website.GiftVoucher";

whenReady(() => {
    const owl_giftVoucher = document.querySelector('.giftVoucher');
    if (owl_giftVoucher) {
        mount(GiftVoucher, owl_giftVoucher, { getTemplate });
    }
});
