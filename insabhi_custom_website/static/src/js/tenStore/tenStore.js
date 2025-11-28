/** @odoo-module **/

import { Component, mount, whenReady } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class TenStore extends Component {}
TenStore.template = "insabhi_custom_website.TenStore";

whenReady(() => {
    const owl_tenStore = document.querySelector('.tenStore');
    if (owl_tenStore) {
        mount(TenStore, owl_tenStore, { getTemplate });
    }
});

/* =============================
   CARD CLICK → DETAIL PAGE
   ============================= */

window.showFullScreenModal = function(id) {
    if (!id) {
        console.warn("showFullScreenModal called without id");
        return;
    }
    const safeId = encodeURIComponent(id);
    window.location.href = '/tenStore/product/' + safeId;
};

// keep close function for compatibility
window.closeFullScreenModal = function(id) {};

// Book Now Logic
window.bookNow = function (id) {
    alert("Booking for " + id);
};

// open images in new tab
window.viewImage = function (imageSrc) {
    if (imageSrc) window.open(imageSrc, "_blank");
};
