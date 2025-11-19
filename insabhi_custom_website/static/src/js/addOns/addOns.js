/** @odoo-module **/

import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class AddOns extends Component {
}

AddOns.template = "insabhi_custom_website.AddOns";

whenReady(() => {
    const owl_addOns = document.querySelector('.addOns');
    if (owl_addOns) {
        mount(AddOns, owl_addOns, { getTemplate });
    }
});


///** @odoo-module **/
//
//import { Component, mount, whenReady, useState, onWillStart } from "@odoo/owl";
//import { getTemplate } from "@web/core/templates";
//import { rpc } from "@web/core/network/rpc";
//
//export class AboutUs extends Component {
//}
//
//AboutUs.template = "insabhi_custom_website.AboutUs";
//
//whenReady(() => {
//    const owl_about_us = document.querySelector('.aboutus');
//    if (owl_about_us) {
//        mount(AboutUs, owl_about_us, { getTemplate });
//    }
//});
