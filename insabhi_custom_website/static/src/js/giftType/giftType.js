/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class GiftType extends Component {
}

GiftType.template = "insabhi_custom_website.GiftType";

whenReady(() => {
    const owl_giftType = document.querySelector('.giftType');
    if (owl_giftType) {
        mount(GiftType, owl_giftType, { getTemplate });
    }
});


